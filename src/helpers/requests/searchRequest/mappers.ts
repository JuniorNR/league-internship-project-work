import { FILTER_TYPES } from 'constants/index';
import { SearchFormEntity, TaskAddEntity, TaskEntity, TaskStatusEntity } from 'domains/index';
import {
  GetAllTasksRequest,
  GetAllTasksResponse,
  GetTaskResponse,
  UpdateTaskRequest,
  UpdateTaskResponse,
} from 'http/index';

export const mapToExternalParams = (params?: SearchFormEntity): GetAllTasksRequest | undefined => {
  if (!params) return undefined;

  const { searchValue, filterType } = params;
  let isCompleted = undefined;

  if (filterType === FILTER_TYPES.DONE.toUpperCase()) isCompleted = true;
  if (filterType === FILTER_TYPES.ACTIVE.toUpperCase()) isCompleted = false;

  return {
    isImportant: filterType === FILTER_TYPES.IMPORTANT.toUpperCase() ? true : undefined,
    name_like: searchValue,
    isCompleted,
  };
};

export const mapToInternalParams = (tasks: GetAllTasksResponse): TaskEntity[] => {
  const internalTasks: TaskEntity[] = [];

  tasks.forEach((item) => {
    if (item.id) {
      internalTasks.push({
        name: item.name || 'Not filled in',
        id: item.id,
        info: item.info || 'Not filled in',
        isImportant: item.isImportant || false,
        isDone: item.isCompleted || false,
      });
    }
  });

  return internalTasks;
};

export const mapToInternalStatus = (tasks: GetAllTasksResponse): TaskStatusEntity => {
  const total = tasks.length;

  const otherStatus = tasks.reduce(
    (acc, cur) => {
      return {
        important: cur.isImportant ? acc.important + 1 : acc.important,
        done: cur.isCompleted ? acc.done + 1 : acc.done,
      };
    },
    {
      important: 0,
      done: 0,
    }
  );

  return {
    total,
    ...otherStatus,
  };
};

export const mapToInternalParamsTask = (task: GetTaskResponse): TaskEntity => {
  let internalTask: TaskEntity = {
    name: '',
    id: 0,
    info: '',
    isImportant: false,
    isDone: false,
  };

  if (task.id) {
    internalTask = {
      name: task.name || 'Not filled in',
      id: task.id,
      info: task.info || 'Not filled in',
      isImportant: task.isImportant || false,
      isDone: task.isCompleted || false,
    };

    return internalTask;
  }

  return internalTask;
};

export const mapToExternalParamsTask = (task: TaskEntity | TaskAddEntity): UpdateTaskRequest => {
  const externalTask: UpdateTaskRequest = {
    name: task.name || undefined,
    info: task.info || undefined,
    isCompleted: task.isDone,
    isImportant: task.isImportant,
  };
  return externalTask;
};
