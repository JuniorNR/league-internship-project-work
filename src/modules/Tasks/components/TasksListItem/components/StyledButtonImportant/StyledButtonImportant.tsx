import styled from '@emotion/styled';

import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import { StyledButtonImportantProps } from './StyledButtonImportantProps';

export const StyledButtonImportant = ({ isImportant = false, isDone = false, onClick }: StyledButtonImportantProps) => {
  const StyledButtonImportantComponent = styled('button')({
    color: isImportant ? '#fff' : '#198754',
    backgroundColor: isImportant ? '#198754' : 'transparent',
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

  return (
    <StyledButtonImportantComponent type="button" onClick={onClick} disabled={isDone}>
      <PriorityHighIcon />
    </StyledButtonImportantComponent>
  );
};
