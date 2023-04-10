import { ChangeEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaTaskEdit } from './validation.schema';

import { TasksStoreInstance } from 'modules/Tasks/store';

import { TextField, Loader } from 'components/index';

import { TaskEntity } from 'domains/index';

import { PATHS } from 'constants/paths';

import './EditForm.css';

const EditFormComponent = () => {
  const { setValue, control, handleSubmit } = useForm<TaskEntity>({
    resolver: yupResolver(schemaTaskEdit),
  });
  const { task, isTasksLoading, changeTask } = TasksStoreInstance;
  const isImportantRef = useRef<HTMLInputElement>(null);
  const redirect = useNavigate();

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
      isImportantRef.current?.setAttribute('disabled', 'true');
    } else {
      isImportantRef.current?.removeAttribute('disabled');
    }
  };

  const onChangeIsImportant = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', event.target.checked);
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
    <div className="taskEdit">
      <div className="taskEdit__wrapper">
        <Loader isLoading={isTasksLoading}>
          {task !== null ? (
            <>
              <h1 className="text-center">TODO LIST | EDIT TASK {task?.id}</h1>
              <form className="taskEdit__form" onSubmit={handleSubmit(onSubmitForm)}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { value }, fieldState: { error } }) => (
                    <TextField
                      label="Task name"
                      inputType="text"
                      onChange={onChangeName}
                      value={value}
                      errorText={error?.message}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="info"
                  render={({ field: { value }, fieldState: { error } }) => (
                    <TextField
                      label="What to do(description)"
                      inputType="text"
                      onChange={onChangeInfo}
                      value={value}
                      errorText={error?.message}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="isImportant"
                  render={({ field: { value } }) => (
                    <div className={`form-check mb-3`}>
                      <input
                        ref={isImportantRef}
                        className="form-check-input"
                        type="checkbox"
                        id="isImportant"
                        disabled={task?.isDone === true ? true : false}
                        checked={value}
                        onChange={onChangeIsImportant}
                      />
                      <label className="form-check-label" htmlFor="isImportant">
                        Important
                      </label>
                    </div>
                  )}
                />
                <Controller
                  control={control}
                  name="isDone"
                  render={({ field: { value } }) => (
                    // <Checkbox label="Done" checked={value} onChange={onChangeIsDone} />
                    <div className={`form-check mb-3`}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="isDone"
                        checked={value}
                        onChange={onChangeIsDone}
                      />
                      <label className="form-check-label" htmlFor="isDone">
                        Done
                      </label>
                    </div>
                  )}
                />
                <button type="submit" className="taskEdit__submit btn btn-secondary">
                  Edit task
                </button>
              </form>
            </>
          ) : (
            <div>
              <p>Not Found</p>
            </div>
          )}
        </Loader>
      </div>
    </div>
  );
};

export const EditForm = observer(EditFormComponent);
