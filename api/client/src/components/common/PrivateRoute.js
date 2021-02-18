import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../redux/actions/auth-actions/loadUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PrivateRoute({ component: Component, userrr, ...rest }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // load our user everytime we render
    dispatch(loadUser());
  }, [dispatch]);

  const { user, loading, auth } = useSelector((state) => state.userrr);

  return (
    <Route
      render={(state) =>
        auth.isAdmin === true ? (
          <Component {...state} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
