import { Box } from '@mui/material';
import styled from '@emotion/styled';

import { StyledTasksFormProps } from './StyledTasksFormProps.interface';

const Form = styled(Box)({});

export const StyledTasksForm = ({ children, onSubmit }: StyledTasksFormProps) => {
  return (
    <Form component="form" onSubmit={onSubmit}>
      {children}
    </Form>
  );
};
