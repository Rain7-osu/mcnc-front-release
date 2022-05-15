import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Layout } from './Layout';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
