import styled from '@emotion/styled';

import { StyledTypographyPProps } from './StyledTypographyPProps.interface';

export const StyledTypographyP = ({ children, isImportant, isDone }: StyledTypographyPProps): any => {
  const StyledTypographyPComponent = styled('h4')({
    color: isImportant ? '#198754' : '#000',
    fontWeight: isImportant ? 'bold' : 'regular',
    textDecoration: isDone ? 'line-through' : 'none',
    fontSize: '16px',
  });

  return <StyledTypographyPComponent>{children}</StyledTypographyPComponent>;
};
