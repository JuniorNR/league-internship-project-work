export const ROOT = '/';
export const EDIT = 'edit';
export const ADD = 'add';
export const TASK_ID = 'task_id';

export const PATHS = {
  ROOT,
  EDIT: `/${EDIT}/:${TASK_ID}`,
  ADD: `/${ADD}`,
};
