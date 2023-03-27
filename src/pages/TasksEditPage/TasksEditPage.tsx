import { useState, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer } from 'components/index';

import { tasks } from '__mocks__/tasks.mock';

import './TasksEditPage.css';

export const TasksEditPage = (): JSX.Element => {
  let task: {
    name: string;
    info: string;
    isImportant: boolean;
    isDone: boolean;
  } = {
    name: '',
    info: '',
    isImportant: false,
    isDone: false,
  };

  const { task_id } = useParams();

  if (task_id) {
    tasks.forEach((item) => {
      if (item.id === +task_id) {
        task = item;
      }
    });
  }

  const [name, setName] = useState(task.name);
  const [info, setInfo] = useState(task.info);
  const [important, setIsImportant] = useState(task.isImportant);
  const [done, setIsDone] = useState(task.isDone);

  const submitForm = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const onChangeImportant = () => {
    setIsImportant((prev) => !prev);
  };

  const onChangeDone = () => {
    setIsDone((prev) => !prev);
    if (!done) {
      setIsImportant(false);
    }
  };

  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST | ADD TASK</h1>
      <form className="taskEdit">
        <div className="row mb-3 d-block">
          <label htmlFor="name" className="taskEdit__label col-sm-2 col-htmlForm-label w-100 mb-2">
            Task name
          </label>
          <div>
            <input
              type="text"
              className="taskEdit__input htmlForm-control w-100"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3 d-block">
          <label htmlFor="info" className="taskEdit__label col-sm-2 col-htmlForm-label w-100 mb-2">
            What to do(description)
          </label>
          <div>
            <input
              type="text"
              className="taskEdit__input htmlForm-control w-100"
              id="info"
              value={info}
              onChange={(event) => setInfo(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-10 mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="isImportant"
              value=""
              checked={important}
              disabled={done ? true : false}
              onChange={onChangeImportant}
            />
            <label className="form-check-label" htmlFor="isImportant">
              Important
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="isDone"
              value=""
              checked={done}
              onChange={onChangeDone}
            />
            <label className="form-check-label" htmlFor="isDone">
              Completed
            </label>
          </div>
        </div>
        <button type="submit" className="taskEdit__submit btn btn-secondary" onClick={submitForm}>
          Edit task
        </button>
      </form>
    </PageContainer>
  );
};
