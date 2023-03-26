import { statusInfo } from '__mocks__/tasks.mock';

import './TasksStats.css';

export const TasksStats = () => {
  return (
    <div className="tasksStats mb-3">
      <ul className="tasksStats__list d-flex justify-content-between">
        <li className="tasksStats__item">
          Total: <span className="badge bg-secondary">{statusInfo.total}</span>
        </li>
        <li className="tasksStats__item">
          Important: <span className="badge bg-secondary">{statusInfo.important}</span>
        </li>
        <li className="tasksStats__item">
          Done: <span className="badge bg-secondary">{statusInfo.done}</span>
        </li>
      </ul>
    </div>
  );
};
