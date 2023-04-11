import { Link } from 'react-router-dom';
import { useState, memo } from 'react';

import { Box } from '@mui/material';

import { TaskListItemProps } from './TaskListItemProps.interface';

import {
  StyledTypographyH4,
  StyledTypographyP,
  StyledButtonImportant,
  StyledButtonDone,
  StyledButtonDelete,
  StyledLinkEdit,
} from './components/index';

import { StyledTasksListLi, StyledTasksListControls } from './TasksListItem.styles';

const TasksListItemComponent = ({
  task,
  changeTaskImportance,
  changeTaskComplete,
  deleteTask,
}: TaskListItemProps): JSX.Element => {
  const { name, id, info, isImportant, isDone } = task;
  const [isDoneItem, setIsDoneItem] = useState(isDone);
  const [isImportantItem, setIsImportantItem] = useState(isImportant);

  const onChangeImportant = () => {
    setIsImportantItem((prev) => !prev);
    changeTaskImportance(id, !isImportantItem);
  };

  const onChangeDone = () => {
    setIsDoneItem((prev) => !prev);
    changeTaskComplete(id, !isDoneItem);

    if (!isDoneItem) {
      setIsImportantItem(false);
      changeTaskImportance(id, false);
    }
  };

  const onDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <StyledTasksListLi>
      <Box marginRight="10px" width="380px">
        <StyledTypographyH4 isImportant={isImportantItem} isDone={isDoneItem}>
          {name.length > 25 ? name.slice(0, 25) + '...' : name}
        </StyledTypographyH4>
        <StyledTypographyP isImportant={isImportantItem} isDone={isDoneItem}>
          {info.length > 50 ? info.slice(0, 50) + '...' : info}
        </StyledTypographyP>
      </Box>
      <StyledTasksListControls>
        <StyledButtonImportant onClick={onChangeImportant} isImportant={isImportantItem} isDone={isDoneItem} />
        <StyledButtonDone onClick={onChangeDone} isDone={isDoneItem} />
        <StyledButtonDelete onClick={onDeleteTask} />
        <StyledLinkEdit to={`/task/edit/${id}`} />
      </StyledTasksListControls>
    </StyledTasksListLi>
  );
};

export const TasksListItem = memo(TasksListItemComponent);
