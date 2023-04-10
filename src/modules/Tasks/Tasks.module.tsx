import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { TasksStoreInstance } from './store';

import { SearchForm, TasksStatus, TasksList } from './components/index';
import { PATHS } from 'constants/paths';

import { StyledLink } from 'components/index';

const TasksComponent = () => {
  const { updateTasks } = TasksStoreInstance;
  useEffect(() => {
    updateTasks();
  }, []);

  return (
    <>
      <SearchForm />
      <TasksStatus />
      <TasksList />
      <StyledLink to={PATHS.ADD}>Add Task</StyledLink>
    </>
  );
};

export const Tasks = observer(TasksComponent);
