import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { StyledFormProps } from './StyledForm.interface';

const Form = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
});

export const StyledTasksForm = ({ children, onSubmit }: StyledFormProps) => {
  return (
    <Form component={'form'} onSubmit={onSubmit}>
      {children}
    </Form>
  );
};
