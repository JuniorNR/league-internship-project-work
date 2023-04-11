import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Typography, TextField, Checkbox, Box } from '@mui/material';
import { validationSchema } from './validation.schema';

import { TasksStoreInstance } from 'modules/Tasks/store';

import { StyledTasksForm, StyledButton } from 'components/index';

import { TaskAddEntity } from 'domains/index';

import { PATHS } from 'constants/index';

export const AddForm = () => {
  const redirect = useNavigate();
  const defaultValues: TaskAddEntity = {
    name: '',
    info: '',
    isDone: false,
    isImportant: false,
  };

  const { control, setValue, handleSubmit } = useForm<TaskAddEntity>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('name', event.target.value);
  };

  const onChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('info', event.target.value);
  };

  const onChangeIsImportant = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', event.target.checked);
  };

  const onSubmitForm: SubmitHandler<TaskAddEntity> = async (data: TaskAddEntity): Promise<void> => {
    const response = await TasksStoreInstance.postTask(data);
    if (response) {
      redirect(PATHS.ROOT);
    }
  };

  return (
    <>
      <Typography variant="h4" component="h1" mb="15px">
        TODO LIST | ADD TASK
      </Typography>
      <StyledTasksForm onSubmit={handleSubmit(onSubmitForm)}>
        <Box display="flex" flexDirection="column" gap="15px" mb="15px">
          <Controller
            control={control}
            name="name"
            render={({ field: { value }, fieldState: { error } }) => (
              <TextField
                error={error ? true : false}
                label="Task name"
                value={value}
                onChange={onChangeName}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="info"
            render={({ field: { value }, fieldState: { error } }) => (
              <TextField
                error={error ? true : false}
                label="What to do(description)"
                value={value}
                onChange={onChangeInfo}
                helperText={error?.message}
              />
            )}
          />
        </Box>

        <Controller
          control={control}
          name="isImportant"
          render={({ field: { value } }) => (
            <Box display="flex" alignItems="center" mb="15px">
              <Checkbox size="small" id="isImportant" checked={value} onChange={onChangeIsImportant} />
              <label htmlFor="isImportant">Important</label>
            </Box>
          )}
        />
        <StyledButton width="100%" type="submit">
          Add task
        </StyledButton>
      </StyledTasksForm>
    </>
  );
};
