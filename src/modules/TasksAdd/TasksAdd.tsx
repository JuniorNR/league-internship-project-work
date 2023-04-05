import { ChangeEvent } from 'react';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validation.schema';

import { TextField, Checkbox } from 'components/index';

import { TasksAddEntity } from 'domains/index';

import './TasksAdd.css';

export const TasksAdd = (): JSX.Element => {
  const defaultValues: TasksAddEntity = {
    name: '',
    info: '',
    isImportant: false,
  };

  const { control, setValue, handleSubmit } = useForm<TasksAddEntity>({
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

  const onSubmitForm: SubmitHandler<TasksAddEntity> = (data: TasksAddEntity): void => {
    console.log('name: ', data.name);
    console.log('info: ', data.info);
    console.log('is important: ', data.isImportant);
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
