import { Typography } from '@mui/material';
import { Tasks } from '../../modules/index';
import { PageContainer } from 'components/index';

export const TasksPage = (): JSX.Element => {
  return (
    <PageContainer>
      <Typography variant="h3" component={'h1'}>
        TODO LIST
      </Typography>
      <Tasks />
    </PageContainer>
  );
};
