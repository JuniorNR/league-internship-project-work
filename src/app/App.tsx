import { BrowserRouter } from 'react-router-dom';

import { Router } from './../router/index';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
