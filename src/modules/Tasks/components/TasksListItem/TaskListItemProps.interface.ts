import { TaskEntity } from 'domains/index';

export interface TaskListItemProps {
  task: TaskEntity;
  changeTaskImportance: (taskID: number, currentStatus: boolean) => void;
  changeTaskComplete: (taskID: number, currentStatus: boolean) => void;
  deleteTask: (taskID: number) => void;
}
