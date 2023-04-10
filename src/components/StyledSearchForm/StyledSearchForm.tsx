import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { StyledSearchFormProps } from './StyledSearchFormProps.interface';

const Form = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
  height: '40px',
});

export const StyledSearchForm = ({ children, onSubmit }: StyledSearchFormProps) => {
  return (
    <Form component={'form'} onSubmit={onSubmit}>
      {children}
    </Form>
  );
};
