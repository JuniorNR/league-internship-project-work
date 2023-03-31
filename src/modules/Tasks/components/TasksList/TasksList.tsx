import { observer } from 'mobx-react';

import { TasksListItem } from '../TasksListItem/index';

import { TasksStoreInstance } from 'modules/Tasks/store';

import { Loader } from 'components/Loader/index';

import './TasksList.css';

const TasksListComponent = (): JSX.Element => {
  const { tasks, isTasksLoading, changeTaskImportance, changeTaskComplete, deleteTask } = TasksStoreInstance;

  return (
    <div className="tasksList mb-2">
      <Loader isLoading={isTasksLoading}>
        <ul className="tasksList__list">
          {tasks.map((item) => {
            return (
              <TasksListItem
                key={item.id}
                task={item}
                changeTaskImportance={changeTaskImportance}
                changeTaskComplete={changeTaskComplete}
                deleteTask={deleteTask}
              />
            );
          })}
        </ul>
      </Loader>
    </div>
  );
};

export const TasksList = observer(TasksListComponent);
