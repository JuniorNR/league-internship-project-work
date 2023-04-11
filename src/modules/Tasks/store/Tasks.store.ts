import { makeObservable, observable, action, computed } from 'mobx';

import { TaskEntity, TaskStatusEntity, SearchFormEntity, TaskAddEntity } from 'domains/index';
import { FILTER_TYPES } from 'constants/index';

import { TasksAgentInstance } from 'http/agent/index';

import {
  mapToExternalParams,
  mapToInternalParams,
  mapToInternalStatus,
  mapToInternalParamsTask,
  mapToExternalParamsTask,
} from 'helpers/index';

type PrivateFields = '_tasks' | '_tasksStatus' | '_isTasksLoading' | '_task' | '_searchForm';

class Tasks {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _task: observable,
      _tasks: observable,
      _tasksStatus: observable,
      _isTasksLoading: observable,
      _searchForm: observable,

      task: computed,
      tasks: computed,
      tasksStatus: computed,

      updateTask: action,
      updateTasks: action,
      changeTask: action,
      changeTaskImportance: action,
      changeTaskComplete: action,
      deleteTask: action,
    });
  }

  private _isTasksLoading = false;
  private _task: TaskEntity | null = null;
  private _tasks: TaskEntity[] = [];
  private _tasksStatus: TaskStatusEntity = {
    total: 0,
    important: 0,
    done: 0,
  };
  private _searchForm: SearchFormEntity = {
    searchValue: '',
    filterType: FILTER_TYPES.ALL,
  };

  get task(): TaskEntity | null {
    return this._task;
  }

  get tasks(): TaskEntity[] {
    return this._tasks;
  }

  get tasksStatus(): TaskStatusEntity {
    return this._tasksStatus;
  }

  get isTasksLoading() {
    return this._isTasksLoading;
  }

  getTask = async (taskID: number) => {
    const response = await TasksAgentInstance.getTask(taskID);
    return {
      task: mapToInternalParamsTask(response),
    };
  };

  postTask = async (body: TaskAddEntity): Promise<boolean> => {
    this._isTasksLoading = true;
    try {
      const externalParamsTask = mapToExternalParamsTask(body);
      await TasksAgentInstance.postTask(externalParamsTask);
      return true;
    } catch {
      return false;
    } finally {
      this._isTasksLoading = false;
    }
  };

  updateTask = async (taskID: number) => {
    this._isTasksLoading = true;
    try {
      const { task } = await this.getTask(taskID);
      this._task = task;
    } catch {
      this._task = null;
    } finally {
      this._isTasksLoading = false;
    }
  };

  changeTask = async (taskID: number, taskBody: TaskEntity): Promise<boolean> => {
    this._isTasksLoading = true;

    try {
      const externalData = mapToExternalParamsTask(taskBody);

      await TasksAgentInstance.updateTask(taskID, externalData);
      await this.updateTask(taskID);

      return true;
    } catch {
      return false;
    } finally {
      this._isTasksLoading = true;
    }
  };

  getTasks = async (searchParams?: SearchFormEntity) => {
    const internalData = mapToExternalParams(searchParams);
    const response = await TasksAgentInstance.getAllTasks(internalData);
    return {
      tasks: mapToInternalParams(response),
      tasksStatus: mapToInternalStatus(response),
    };
  };

  updateTasks = async (searchParams?: SearchFormEntity) => {
    this._isTasksLoading = true;

    try {
      if (searchParams) this._searchForm = searchParams;
      const { tasks, tasksStatus } = await this.getTasks(searchParams);
      this._tasks = tasks;
      this._tasksStatus = tasksStatus;
    } catch {
      this._tasks = [];
      this._tasksStatus = {
        total: 0,
        important: 0,
        done: 0,
      };
    } finally {
      this._isTasksLoading = false;
    }
  };

  changeTaskImportance = async (taskID: number, currentStatus: boolean) => {
    this._isTasksLoading = true;
    try {
      await TasksAgentInstance.updateTask(taskID, { isImportant: currentStatus });
      const { tasks, tasksStatus } = await this.getTasks(this._searchForm);
      this._tasks = tasks;
      this._tasksStatus = tasksStatus;
    } catch {
      this._tasks = [];
      this._tasksStatus = {
        total: 0,
        important: 0,
        done: 0,
      };
    } finally {
      this._isTasksLoading = false;
    }
  };

  changeTaskComplete = async (taskID: number, currentStatus: boolean) => {
    this._isTasksLoading = true;

    try {
      await TasksAgentInstance.updateTask(taskID, { isCompleted: currentStatus });
      const { tasks, tasksStatus } = await this.getTasks(this._searchForm);

      this._tasks = tasks;
      this._tasksStatus = tasksStatus;
    } catch {
      this._tasks = [];
      this._tasksStatus = {
        total: 0,
        important: 0,
        done: 0,
      };
    } finally {
      this._isTasksLoading = false;
    }
  };

  deleteTask = async (taskID: number) => {
    this._isTasksLoading = true;
    try {
      await TasksAgentInstance.deleteTask(taskID);
      const { tasks, tasksStatus } = await this.getTasks(this._searchForm);

      this._tasks = tasks;
      this._tasksStatus = tasksStatus;
    } catch {
      this._tasks = [];
      this._tasksStatus = {
        total: 0,
        important: 0,
        done: 0,
      };
    } finally {
      this._isTasksLoading = false;
    }
  };
}

export const TasksStoreInstance = new Tasks();
