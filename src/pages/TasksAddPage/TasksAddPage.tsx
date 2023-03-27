import { useState, MouseEvent } from 'react';

import { PageContainer } from 'components/index';

import './TaskAddPage.css';

export const TasksAddPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [important, setIsImportant] = useState(false);

  const submitForm = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST | ADD TASK</h1>
      <form className="taskAdd">
        <div className="row mb-3 d-block">
          <label htmlFor="name" className="taskAdd__label col-sm-2 col-htmlForm-label w-100 mb-2">
            Task name
          </label>
          <div>
            <input
              type="text"
              className="taskAdd__input htmlForm-control w-100"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3 d-block">
          <label htmlFor="info" className="taskAdd__label col-sm-2 col-htmlForm-label w-100 mb-2">
            What to do(description)
          </label>
          <div>
            <input
              type="text"
              className="taskAdd__input htmlForm-control w-100"
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
              value=""
              id="isImportant"
              checked={important}
              onChange={() => setIsImportant((prev) => !prev)}
            />
            <label className="form-check-label" htmlFor="isImportant">
              Important
            </label>
          </div>
        </div>
        <button type="submit" className="taskAdd__submit btn btn-secondary" onClick={submitForm}>
          Add task
        </button>
      </form>
    </PageContainer>
  );
};
