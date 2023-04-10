export const ROOT = '/';
export const TASK = 'task';
export const EDIT = 'edit';
export const ADD = 'add';
export const TASK_ID = 'task_id';

export const PATHS = {
  ROOT,
  EDIT: `/${TASK}/${EDIT}/:${TASK_ID}`,
  ADD: `/${TASK}/${ADD}`,
};
