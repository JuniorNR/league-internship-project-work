import { MouseEvent, memo, useRef } from 'react';

import { TasksStatusFilterProps } from './TasksStatusFilter.interface';
import { FilterTypes } from 'domains/index';

const TasksStatusFilterComponent = ({ taskType, onChange }: TasksStatusFilterProps): JSX.Element => {
  const buttonsGroupRef = useRef<HTMLDivElement>(null);

  const onChangeType = (event: MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }): void => {
    onChange(event.target.textContent as FilterTypes);
    changeActiveClass(event.target.textContent);
  };

  const changeActiveClass = (element: string | null) => {
    if (buttonsGroupRef.current) {
      Array.from(buttonsGroupRef.current.children).forEach((item) => {
        if (item.textContent === element) {
          item.classList.add('btn-info');
          item.classList.remove('btn-outline-secondary');
        } else {
          item.classList.add('btn-outline-secondary');
          item.classList.remove('btn-info');
        }
      });
    }
  };

  return (
    <div ref={buttonsGroupRef} className="btn-group" onClick={onChangeType}>
      <button type="button" className="btn btn-info">
        ALL
      </button>
      <button type="button" className="btn btn-outline-secondary">
        ACTIVE
      </button>
      <button type="button" className="btn btn-outline-secondary">
        DONE
      </button>
      <button type="button" className="btn btn-outline-secondary">
        IMPORTANT
      </button>
    </div>
  );
};

export const TasksStatusFilter = memo(TasksStatusFilterComponent);
