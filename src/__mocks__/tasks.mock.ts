import { TaskEntity, TaskStatusEntity } from 'domains/index';

export const statusInfo: TaskStatusEntity = {
  total: 4,
  important: 0,
  done: 0,
};

export const tasks: TaskEntity[] = [
  {
    name: 'Test',
    id: 1,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: false,
  },
  {
    name: 'Test 2',
    id: 2,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: false,
  },
  {
    name: 'Test 3',
    id: 3,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: false,
  },
  {
    name: 'Test 4',
    id: 4,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: false,
  },
];
