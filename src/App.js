import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Authcontext from './Store/AuthContext';

function App() {
  const authCtx = useContext(Authcontext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
          <AuthPage />
        </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path='/profile'>
          <UserProfile />
        </Route>
        )}
        <Route path='*'>
          <Redirect to= '/' />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;