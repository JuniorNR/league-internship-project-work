import { useState, useRef, useEffect } from 'react';
import { observer } from 'mobx-react';

import { TasksListItem } from '../TasksListItem/index';

import { TasksStoreInstance } from 'modules/Tasks/store';

import { Loader } from 'components/Loader/index';

import './TasksList.css';

const TasksListComponent = (): JSX.Element => {
  const { tasks, isTasksLoading, changeTaskImportance, changeTaskComplete, deleteTask } = TasksStoreInstance;

  const TasksListRef = useRef<HTMLUListElement>(null);
  const [scrollTasksList, setScrollTasksList] = useState<number>(0);

  useEffect(() => {
    if (TasksListRef.current) {
      TasksListRef.current.scrollTo(0, scrollTasksList);
    }
  }, [tasks]);

  const onScrollTasksList = (event: any) => {
    setScrollTasksList(event.target.scrollTop);
  };

  return (
    <div className="tasksList mb-2">
      <Loader isLoading={isTasksLoading}>
        {tasks.length !== 0 ? (
          <ul ref={TasksListRef} className="tasksList__list" onScroll={onScrollTasksList}>
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
        ) : (
          <div className="tasksList__notFound">
            <p>Not found</p>
          </div>
        )}
      </Loader>
    </div>
  );
};

export const TasksList = observer(TasksListComponent);
