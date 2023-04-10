import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { StyledLinkProps } from './StyledLink.interface';

const StyledButton = styled(Link)({
  backgroundColor: '#6c757d',
  width: '100%',
  display: 'block',
  color: '#fff',
  padding: '5px',
  textDecoration: 'none',
  transition: 'all .3s',
  textAlign: 'center',
  borderRadius: '5px',
  ':hover': {
    backgroundColor: '#42494e',
    color: '#fff',
  },
});

export const StyledLink = ({ to, children }: StyledLinkProps) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};
