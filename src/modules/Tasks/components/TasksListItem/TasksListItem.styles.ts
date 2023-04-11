import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const StyledTasksListLi = styled('li')({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #c4c4c4',
  padding: '0.5rem 1rem',
  maxHeight: '25%',
  height: '25%',
  boxSizing: 'border-box',
});

export const StyledTasksListControls = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '180px',
});
