import { FilterTypes } from 'domains/index';

export interface TasksStatusFilterProps {
  taskType: FilterTypes,
  onChange: (tasksType: FilterTypes) => void
}
