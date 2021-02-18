import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { loadUser } from './redux/actions/auth-actions/loadUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Load the Components
import MainNav from './components/layout/Main_Nav';
import MainNavbar from './components/layout/Navbar';
import Page404 from './components/layout/404';
import GeneralSpinner from './components/layout/GeneralSpinner';
import CompanyOrderTest from './components/companyOrder/CompanyOrderTest';
import LoginForm from '../src/components/auth/Login';
import SignUpForm from '../src/components/auth/SignUpForm';
import PrivateRoute from '../src/components/common/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // load our user everytime we render
    dispatch(loadUser());
  }, [dispatch]);

  const { user, loading, auth } = useSelector((state) => state.userrr);

  // this method to control 404 not found page
  const generateRoute = (path, compt) => {
    if (user && auth.isCustomer && !loading) {
      return <Route path={path} component={compt} exact />;
    } else if (loading) {
      return <Route path={path} component={GeneralSpinner} exact />;
    } else if ((!user && !auth.customer, !loading)) {
      return <Route path={path} component={Page404} exact />;
    }
  };
  return (
    <Router>
      <div className="App">
        {/* <MainNavbar /> */}
        <MainNav />

        <Switch>
          {/* Public Routes */}
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />

          {/* Private Routes  */}
          {generateRoute('/Companyordertest', CompanyOrderTest)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
