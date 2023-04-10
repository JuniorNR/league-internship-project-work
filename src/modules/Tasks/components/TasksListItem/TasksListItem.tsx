import { Link } from 'react-router-dom';
import { useState, memo } from 'react';

import { TaskListItemProps } from './TaskListItemProps.interface';

import './TasksListItem.css';

const TasksListItemComponent = ({
  task,
  changeTaskImportance,
  changeTaskComplete,
  deleteTask,
}: TaskListItemProps): JSX.Element => {
  const { name, id, info, isImportant, isDone } = task;
  const [isDoneItem, setIsDoneItem] = useState(isDone);
  const [isImportantItem, setIsImportantItem] = useState(isImportant);

  const onChangeImportant = () => {
    setIsImportantItem((prev) => !prev);
    changeTaskImportance(id, !isImportantItem);
  };

  const onChangeDone = () => {
    setIsDoneItem((prev) => !prev);
    changeTaskComplete(id, !isDoneItem);

    if (!isDoneItem) {
      setIsImportantItem(false);
      changeTaskImportance(id, false);
    }
  };

  const onDeleteTask = () => {
    deleteTask(id);
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
          {info.length > 50 ? info.slice(0, 50) + '...' : info}
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
        <button
          type="button"
          className={`controls__btn btn btn-outline-danger btn-sm ${isDoneItem ? 'bg-danger' : ''}`}
          onClick={onChangeDone}>
          <i className={`fa fa-check ${isDoneItem ? 'text-white' : ''}`}></i>
        </button>
        <button type="button" className="controls__btn btn btn-outline-danger btn-sm" onClick={onDeleteTask}>
          <i className="fa fa-trash-o"></i>
        </button>
        <Link to={`/task/edit/${id}`} className="controls__btn btn btn-outline-secondary btn-sm">
          <i className="fa fa-pencil"></i>
        </Link>
      </div>
    </li>
  );
};

export const TasksListItem = memo(TasksListItemComponent);
