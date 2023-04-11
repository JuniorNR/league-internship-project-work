import { ChangeEvent, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Typography, TextField, Box, Checkbox } from '@mui/material';

import { schemaTaskEdit } from './validation.schema';
import { TasksStoreInstance } from 'modules/Tasks/store';

import { Loader, StyledTasksForm, StyledButton } from 'components/index';

import { TaskEntity } from 'domains/index';

import { PATHS } from 'constants/paths';

const EditFormComponent = () => {
  const redirect = useNavigate();
  const { setValue, getValues, control, handleSubmit } = useForm<TaskEntity>({
    resolver: yupResolver(schemaTaskEdit),
  });
  const { task, isTasksLoading, changeTask } = TasksStoreInstance;

  const isImportantRef = useRef<HTMLButtonElement>(null);
  if (task) {
    setValue('name', task.name);
    setValue('info', task.info);
    setValue('isImportant', task.isImportant);
    setValue('isDone', task.isDone);
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('name', event.target.value);
  };

  const onChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('info', event.target.value);
  };

  const onChangeIsDone = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('isDone', event.target.checked);

    if (event.target.checked) {
      setValue('isImportant', false);
    }
  };

  const onChangeIsImportant = (event: ChangeEvent<HTMLInputElement>) => {
    if (getValues('isDone') !== true) {
      setValue('isImportant', event.target.checked);
    }
  };

  const onSubmitForm: SubmitHandler<TaskEntity> = async (data: TaskEntity): Promise<void> => {
    if (task) {
      const response = await changeTask(task.id, data);

      if (response) {
        redirect(PATHS.ROOT);
      }
    }
  };

  return (
    <Box display="flex" width="100%" justifyContent="center" alignItems="center" minHeight="400px">
      <Box width="100%">
        <Loader isLoading={isTasksLoading}>
          {task !== null ? (
            <>
              <Typography variant="h4" component={'h1'} align="center">
                TODO LIST | EDIT TASK {task?.id}
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
                        onChange={onChangeName}
                        value={value}
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
                        onChange={onChangeInfo}
                        value={value}
                        helperText={error?.message}
                      />
                    )}
                  />
                </Box>
                <Controller
                  control={control}
                  name="isImportant"
                  render={({ field: { value } }) => (
                    <Box display="flex" alignItems="center">
                      <Checkbox
                        ref={isImportantRef}
                        size="small"
                        id="isImportant"
                        checked={value}
                        onChange={onChangeIsImportant}
                      />
                      <label htmlFor="isImportant">Important</label>
                    </Box>
                  )}
                />
                <Controller
                  control={control}
                  name="isDone"
                  render={({ field: { value } }) => (
                    <Box display="flex" alignItems="center">
                      <Checkbox size="small" id="isDone" checked={value} onChange={onChangeIsDone} />
                      <label htmlFor="isDone">Done</label>
                    </Box>
                  )}
                />
                <StyledButton width="100%" type="submit">
                  Edit task
                </StyledButton>
              </StyledTasksForm>
            </>
          ) : (
            <Box>
              <Typography>Not Found</Typography>
            </Box>
          )}
        </Loader>
      </Box>
    </Box>
  );
};

export const EditForm = observer(EditFormComponent);
