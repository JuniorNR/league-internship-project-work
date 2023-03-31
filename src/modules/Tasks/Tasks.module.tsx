import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { TasksStoreInstance } from './store';

import { SearchForm, TasksStatus, TasksList } from './components/index';

const TasksModule = () => {
  useEffect(() => {
    TasksStoreInstance.loadTasks();
  }, []);

  return (
    <>
      <SearchForm />
      <TasksStatus />
      <TasksList />
      <Link to="/task/add" className="btn btn-secondary d-block ml-auto">
        Add Task
      </Link>
    </>
  );
};

export const Tasks = observer(TasksModule);
