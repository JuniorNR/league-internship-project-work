import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledTasksList = styled(Box)({
  minHeight: '400px',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
});

export const StyledTasksListUl = styled('ul')({
  listStyle: 'none',
  margin: '0',
  padding: '0',
  border: '1px solid #c4c4c4',
  borderRadius: '5px',
  height: '100%',
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    width: '10px',
    backgroundColor: '#6c757d',
    borderRadius: '0 4px 4px 0',
  },
  '::-webkit-scrollbar-thumb': {
    width: '10px',
    backgroundColor: '#000',
    borderRadius: '0 4px 4px 0',
  },
});

export const StyledNotFound = styled(Box)({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
