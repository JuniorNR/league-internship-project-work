import { Tasks } from '../../modules/index';
import { PageContainer } from 'components/index';

export const TasksPage = (): JSX.Element => {
  return (
    <PageContainer>
      <h1>TODO LIST</h1>
      <Tasks />
    </PageContainer>
  );
};
