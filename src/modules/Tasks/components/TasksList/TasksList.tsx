import { TasksListItem } from './TasksListItem/index';

import { tasks } from '__mocks__/tasks.mock';

import './TasksList.css';

export const TasksList = (): JSX.Element => {
  const renderList = (): JSX.Element[] => {
    return tasks.map((item) => {
      return <TasksListItem key={item.id} {...item} />;
    });
  };

  return (
    <div className="TasksList mb-2">
      <ul className="TasksList__list">{renderList()}</ul>
    </div>
  );
};
