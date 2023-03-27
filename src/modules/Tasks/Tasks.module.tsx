import { SearchForm, TasksStats, TasksList } from './components/index';

export const Tasks = () => {
  return (
    <>
      <SearchForm />
      <TasksStats />
      <TasksList />
      <a href="/task-add" className="btn btn-secondary d-block ml-auto">
        Add Task
      </a>
    </>
  );
};
