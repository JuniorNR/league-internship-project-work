import { useState } from 'react';

import { TaskEntity } from 'domains/index';

import './TasksListItem.css';

export const TasksListItem = ({ name, id, info, isImportant, isDone }: TaskEntity): JSX.Element => {
  const [isDoneItem, setIsDoneItem] = useState(isDone);
  const [isImportantItem, setIsImportantItem] = useState(isImportant);

  const onChangeImportant = () => {
    setIsImportantItem((prev) => !prev);
  };

  const onChangeDone = () => {
    setIsDoneItem((prev) => !prev);

    if (!isDoneItem) {
      setIsImportantItem(false);
    }
  };

  return (
    <li className="TasksList__item d-flex justify-content-between">
      <div className="TasksList__info">
        <h4
          className={`${isImportantItem ? 'text-success fw-bold' : ''} ${
            isDoneItem ? 'text-decoration-line-through' : ''
          }`}>
          {name}
        </h4>
        <p
          className={`${isImportantItem ? 'text-success fw-bold' : ''} ${
            isDoneItem ? 'text-decoration-line-through' : ''
          }`}>
          {info}
        </p>
      </div>
      <div className="TasksList__controls d-flex justify-content-between">
        <button
          type="button"
          className={`controls__btn btn btn-sm btn-important ${
            isImportantItem ? 'bg-success text-white' : 'btn-outline-success'
          }`}
          onClick={onChangeImportant}
          disabled={isDoneItem ? true : false}>
          <i className="fa fa-info"></i>
        </button>
        <button type="button" className="controls__btn btn btn-outline-danger btn-sm" onClick={onChangeDone}>
          <i className="fa fa-check"></i>
        </button>
        <button type="button" className="controls__btn btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <a href={`/task-edit/${id}`} className="controls__btn btn btn-outline-secondary btn-sm">
          <i className="fa fa-pencil"></i>
        </a>
      </div>
    </li>
  );
};
