import { ChangeEventHandler, MouseEvent, memo } from 'react';

import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';

import { StyledSearchFieldProps } from './StyledSearchFieldProps';

const StyledInput = styled('input')({
  width: 'auto',
  flexGrow: '1',
  height: '100%',
  borderRadius: '5px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  mr: '3px',
  padding: '5px 10px',
});

const StyledButton = styled('button')({
  position: 'absolute',
  right: '0',
  border: 'none',
  backgroundColor: 'inherit',
});

const StyledCloseIcon = memo(
  styled(CloseIcon)({
    color: '#6c757d',
    transition: 'all .3s',
    ':hover': {
      color: '#42494e',
    },
  })
);

export const StyledSearchField = ({ onChange, value, onReset, placeholder }: StyledSearchFieldProps) => {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (event) => onChange(event.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <Box position="relative" height="100%" display="flex" alignItems="center">
      <StyledInput placeholder={placeholder || 'Search'} onChange={onSearchInputChange} value={value} />
      <StyledButton onClick={onResetBtnClick}>
        <StyledCloseIcon />
      </StyledButton>
    </Box>
  );
};
