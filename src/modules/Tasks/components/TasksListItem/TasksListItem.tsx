import { Link } from 'react-router-dom';
import { useState, memo } from 'react';

import { Box, Typography } from '@mui/material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import { TaskListItemProps } from './TaskListItemProps.interface';

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

  const StyledTypographyH4 = styled('h4')({
    color: isImportantItem ? '#198754' : '#000',
    fontWeight: isImportantItem ? 'bold' : 'regular',
    textDecoration: isDoneItem ? 'line-through' : 'none',
  });

  const StyledTypography = styled('p')({
    color: isImportantItem ? '#198754' : '#000',
    fontWeight: isImportantItem ? 'bold' : 'regular',
    textDecoration: isDoneItem ? 'line-through' : 'none',
  });

  const StyledButtonImportant = styled('button')({
    color: isImportantItem ? '#fff' : '#198754',
    backgroundColor: isImportantItem ? '#198754' : 'transparent',
    padding: '0.25rem 0.5rem',
    width: '40px',
    height: '40px',
    border: '1px solid #198754',
    borderRadius: '0.2rem',
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    ':hover': {
      backgroundColor: '#157347',
      color: '#fff',
    },
    ':disabled': {
      backgroundColor: 'transparent',
      color: 'rgb(8%, 45%, 28%, 0.2)',
      border: '1px solid rgb(8%, 45%, 28%, 0.2)',
    },
  });

  const StyledButtonDone = styled('button')({
    color: isDoneItem ? '#fff' : '#dc3545',
    backgroundColor: isDoneItem ? '#dc3545' : 'transparent',
    padding: '0.25rem 0.5rem',
    width: '40px',
    height: '40px',
    border: '1px solid #dc3545',
    borderRadius: '0.2rem',
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    ':hover': {
      backgroundColor: '#dc3545',
      border: '1px solid #dc3545',
      color: '#fff',
    },
  });

  const StyledButtonDelete = styled('button')({
    color: '#dc3545',
    backgroundColor: 'transparent',
    padding: '0.25rem 0.5rem',
    width: '40px',
    height: '40px',
    border: '1px solid #dc3545',
    borderRadius: '0.2rem',
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    ':hover': {
      backgroundColor: '#dc3545',
      border: '1px solid #dc3545',
      color: '#fff',
    },
  });

  const StyledButtonEdit = styled(Link)({
    color: '#6c757d',
    backgroundColor: 'transparent',
    padding: '0.25rem 0.5rem',
    width: '40px',
    height: '40px',
    border: '1px solid #6c757d',
    borderRadius: '0.2rem',
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    ':hover': {
      backgroundColor: '#6c757d',
      border: '1px solid #6c757d',
      color: '#fff',
    },
  });

  return (
    <StyledTasksListLi>
      <Box marginRight="10px" width="380px">
        <StyledTypographyH4>{name.length > 25 ? name.slice(0, 25) + '...' : name}</StyledTypographyH4>
        <StyledTypography>{info.length > 50 ? info.slice(0, 50) + '...' : info}</StyledTypography>
      </Box>
      <StyledTasksListControls>
        <StyledButtonImportant type="button" onClick={onChangeImportant} disabled={isDoneItem ? true : false}>
          <PriorityHighIcon />
        </StyledButtonImportant>
        <StyledButtonDone type="button" onClick={onChangeDone}>
          <CheckIcon />
        </StyledButtonDone>
        <StyledButtonDelete type="button" onClick={onDeleteTask}>
          <DeleteForeverIcon />
        </StyledButtonDelete>
        <StyledButtonEdit to={`/task/edit/${id}`}>
          <EditIcon />
        </StyledButtonEdit>
      </StyledTasksListControls>
    </StyledTasksListLi>
  );
};

export const TasksListItem = memo(TasksListItemComponent);
