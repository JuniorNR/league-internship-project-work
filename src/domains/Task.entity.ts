import { FILTER_TYPES } from 'constants/index';

export interface TaskEntity {
  name: string;
  id: number;
  info: string;
  isImportant: boolean;
  isDone: boolean;
}

export interface TaskAddEntity {
  name: string,
  info: string,
  isDone: boolean,
  isImportant: boolean
}

export interface TaskStatusEntity {
  total: number;
  important: number;
  done: number;
}

export interface SearchFormEntity {
  searchValue: string;
  filterType: string;
}

export type FilterTypes = typeof FILTER_TYPES[keyof typeof FILTER_TYPES];
