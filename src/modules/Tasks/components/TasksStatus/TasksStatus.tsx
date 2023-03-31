import { observer } from 'mobx-react';

import { TasksStoreInstance } from 'modules/Tasks/store/index';

import { Loader } from 'components/Loader';

import './TasksStatus.css';

const TasksStatusComponent = () => {
  const { tasksStatus, isTasksLoading } = TasksStoreInstance;

  return (
    <div className="tasksStatus mb-3">
      <ul className="tasksStatus__list d-flex justify-content-between">
        <li className="tasksStatus__item">
          <span>Total: </span>
          <Loader isLoading={isTasksLoading} variant="dot">
            <span className="badge bg-secondary">{tasksStatus.total}</span>
          </Loader>
        </li>
        <li className="tasksStatus__item">
          <span>Important: </span>
          <Loader isLoading={isTasksLoading} variant="dot">
            <span className="badge bg-secondary">{tasksStatus.important}</span>
          </Loader>
        </li>
        <li className="tasksStatus__item">
          <span>Done: </span>
          <Loader isLoading={isTasksLoading} variant="dot">
            <span className="badge bg-secondary">{tasksStatus.done}</span>
          </Loader>
        </li>
      </ul>
    </div>
  );
};

export const TasksStatus = observer(TasksStatusComponent);
