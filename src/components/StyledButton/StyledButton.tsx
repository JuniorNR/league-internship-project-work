import { Box } from '@mui/material';
import styled from '@emotion/styled';

import { StyledButtonProps } from './StyledButtonProps.interface';

export const StyledButton = ({ children, onClick, type, variant, width, fontSize }: StyledButtonProps) => {
  let backgroundColor = '#6c757d';
  let backgroundColorHover = '#42494e';
  switch (variant) {
    case 'primary':
      backgroundColor = '#007bff';
      backgroundColorHover = '#0062cc';
      break;
    default:
      backgroundColor = '#6c757d';
      backgroundColorHover = '#42494e';
  }

  const StyledBtn = styled('button')({
    backgroundColor: backgroundColor,
    width: width || 'fit-content',
    height: '100%',
    display: 'block',
    color: '#fff',
    fontSize: fontSize || '16px',
    padding: '5px 10px',
    textDecoration: 'none',
    transition: 'all .3s',
    textAlign: 'center',
    borderRadius: '5px',
    border: 'none',
    ':hover': {
      backgroundColor: backgroundColorHover,
      color: '#fff',
    },
  });

  return (
    <StyledBtn type={type} onClick={onClick}>
      {children}
    </StyledBtn>
  );
};
