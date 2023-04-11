import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import EditIcon from '@mui/icons-material/Edit';

import { StyledLinkProps } from './StyledLinkEditProps.interface';

export const StyledLinkEdit = ({ to }: StyledLinkProps) => {
  const StyledLinkEditComponent = styled(Link)({
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
    <StyledLinkEditComponent to={to}>
      <EditIcon />
    </StyledLinkEditComponent>
  );
};
