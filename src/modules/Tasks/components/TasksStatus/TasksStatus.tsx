import { observer } from 'mobx-react';

import { Box } from '@mui/material';

import { TasksStoreInstance } from 'modules/Tasks/store/index';

import { StyledUl, StyledBadge } from './TasksStatus.styles';
import { Loader } from 'components/Loader';

const TasksStatusComponent = () => {
  const { tasksStatus, isTasksLoading } = TasksStoreInstance;
  return (
    <Box mb="15px">
      <StyledUl>
        <Box component="li">
          <Box component="span">Total: </Box>
          <Loader isLoading={isTasksLoading} variant="dot">
            <StyledBadge>{tasksStatus.total}</StyledBadge>
          </Loader>
        </Box>
        <Box component="li">
          <Box component="span">Important: </Box>
          <Loader isLoading={isTasksLoading} variant="dot">
            <StyledBadge>{tasksStatus.important}</StyledBadge>
          </Loader>
        </Box>
        <Box component="li">
          <Box component="span">Done: </Box>
          <Loader isLoading={isTasksLoading} variant="dot">
            <StyledBadge>{tasksStatus.done}</StyledBadge>
          </Loader>
        </Box>
      </StyledUl>
    </Box>
  );
};

export const TasksStatus = observer(TasksStatusComponent);
