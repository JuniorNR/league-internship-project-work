import { Route, Routes } from 'react-router-dom';

import { TasksPage } from './../pages/index';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/task-add" element={<>Task add</>} />
      <Route path="/task-edit" element={<>Task edit</>} />
    </Routes>
  );
};
