import { Route, Routes } from 'react-router-dom';

import { TasksPage, TasksAddPage, TasksEditPage } from 'pages/index';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/task-add" element={<TasksAddPage />} />
      <Route path="/task-edit/:task_id" element={<TasksEditPage />} />
    </Routes>
  );
};
