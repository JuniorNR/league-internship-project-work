import styled from '@emotion/styled';

import { StyledTypographyH4Props } from './StyledTypographyH4Props.interface';

export const StyledTypographyH4 = ({ children, isImportant, isDone }: StyledTypographyH4Props): any => {
  const StyledTypographyH4Component = styled('h4')({
    color: isImportant ? '#198754' : '#000',
    fontWeight: isImportant ? 'bold' : 'regular',
    textDecoration: isDone ? 'line-through' : 'none',
    fontSize: '20px',
  });

  return <StyledTypographyH4Component>{children}</StyledTypographyH4Component>;
};
