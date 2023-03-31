import { TasksAdd } from 'modules/TasksAdd';

import { PageContainer } from 'components/index';

import './TaskAddPage.css';

export const TasksAddPage = (): JSX.Element => {
  return (
    <PageContainer>
      <TasksAdd />
    </PageContainer>
  );
};
