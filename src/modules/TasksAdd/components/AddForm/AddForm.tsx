import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validation.schema';

import { TasksStoreInstance } from 'modules/Tasks/store';

import { TextField, Checkbox } from 'components/index';

import { TaskAddEntity } from 'domains/index';

import { PATHS } from 'constants/index';

import './AddForm.css';

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
    console.log(data);
    const response = await TasksStoreInstance.postTask(data);
    if (response) {
      redirect(PATHS.ROOT);
    }
  };

  return (
    <>
      <h1 className="text-center">TODO LIST | ADD TASK</h1>
      <form className="taskAdd" onSubmit={handleSubmit(onSubmitForm)}>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Task name"
              inputType="text"
              value={field.value}
              onChange={onChangeName}
              errorText={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="info"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="What to do(description)"
              inputType="text"
              value={field.value}
              onChange={onChangeInfo}
              errorText={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="isImportant"
          render={({ field, fieldState: { error } }) => (
            <Checkbox label="Important" checked={field.value} onChange={onChangeIsImportant} />
          )}
        />
        <button type="submit" className="taskAdd__submit btn btn-secondary">
          Add task
        </button>
      </form>
    </>
  );
};
