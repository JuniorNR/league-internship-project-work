import { makeObservable, observable, action, computed } from 'mobx';

import { TaskEntity, TaskStatusEntity, SearchFormEntity } from 'domains/index';

import { tasks, statusInfo } from '__mocks__/tasks.mock';

import { delay } from 'helpers/delay';

type PrivateFields = '_tasks' | '_tasksStatus' | '_isTasksLoading';

class Tasks {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _tasks: observable,
      _tasksStatus: observable,
      _isTasksLoading: observable,

      tasks: computed,
      tasksStatus: computed,

      loadTasks: action,
    });
  }

  private _isTasksLoading = false;
  private _tasks: TaskEntity[] = [];
  private _tasksStatus: TaskStatusEntity = {
    total: 0,
    important: 0,
    done: 0,
  };

  get tasks(): TaskEntity[] {
    return this._tasks;
  }

  get tasksStatus(): TaskStatusEntity {
    return this._tasksStatus;
  }

  get isTasksLoading() {
    return this._isTasksLoading;
  }

  loadTasks = async (SearchParams?: SearchFormEntity) => {
    this._isTasksLoading = true;
    this._tasks = tasks;
    this._tasksStatus = statusInfo;
    await delay(1000);
    this._isTasksLoading = false;
  };

  changeTaskImportance = (taskID: number, currentStatus: boolean) => {
    console.log('Change Task importance', currentStatus);
  };

  changeTaskComplete = (taskID: number, currentStatus: boolean) => {
    console.log('Change Task complete', currentStatus);
  };

  deleteTask = (taskID: number) => {
    console.log('Delete task', taskID);
  };
}

export const TasksStoreInstance = new Tasks();
