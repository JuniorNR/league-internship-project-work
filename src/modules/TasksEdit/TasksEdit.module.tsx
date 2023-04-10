import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';

import { EditForm } from './components';
import { TasksStoreInstance } from 'modules/Tasks/store';

const TasksEditComponent = () => {
  const { task_id } = useParams();
  const { updateTask } = TasksStoreInstance;

  useEffect(() => {
    if (task_id) {
      updateTask(Number(task_id));
    }
  }, []);

  return (
    <>
      <EditForm />
    </>
  );
};

export const TasksEdit = observer(TasksEditComponent);
