import styled from '@emotion/styled';

import CheckIcon from '@mui/icons-material/Check';

import { StyledButtonDoneProps } from './StyledButtonDoneProps';

export const StyledButtonDone = ({ isDone = false, onClick }: StyledButtonDoneProps) => {
  const StyledButtonDoneComponent = styled('button')({
    color: isDone ? '#fff' : '#dc3545',
    backgroundColor: isDone ? '#dc3545' : 'transparent',
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

  return (
    <StyledButtonDoneComponent type="button" onClick={onClick}>
      <CheckIcon />
    </StyledButtonDoneComponent>
  );
};
