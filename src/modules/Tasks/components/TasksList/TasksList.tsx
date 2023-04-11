import { useState, useRef, useEffect, UIEventHandler, UIEvent } from 'react';
import { observer } from 'mobx-react';

import { Typography } from '@mui/material';

import { TasksListItem } from '../TasksListItem/index';
import { StyledTasksList, StyledTasksListUl, StyledNotFound } from './TasksList.styles';
import { TasksStoreInstance } from 'modules/Tasks/store';

import { Loader } from 'components/Loader/index';

const TasksListComponent = (): JSX.Element => {
  const { tasks, isTasksLoading, changeTaskImportance, changeTaskComplete, deleteTask } = TasksStoreInstance;

  const TasksListRef = useRef<HTMLUListElement>(null);
  const [scrollTasksList, setScrollTasksList] = useState<number>(0);

  useEffect(() => {
    if (TasksListRef.current) {
      TasksListRef.current.scrollTo(0, scrollTasksList);
    }
  }, [tasks]);

  const onScrollTasksList = (event: UIEvent<HTMLUListElement>) => {
    setScrollTasksList((event.target as HTMLElement).scrollTop);
  };

  return (
    <StyledTasksList>
      <Loader isLoading={isTasksLoading}>
        {tasks.length !== 0 ? (
          <StyledTasksListUl ref={TasksListRef} onScroll={onScrollTasksList} scrollbar-width="10px">
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
          </StyledTasksListUl>
        ) : (
          <StyledNotFound>
            <Typography>Not found</Typography>
          </StyledNotFound>
        )}
      </Loader>
    </StyledTasksList>
  );
};

export const TasksList = observer(TasksListComponent);
