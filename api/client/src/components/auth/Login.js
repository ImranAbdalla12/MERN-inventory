import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Toast, Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, Slide } from 'react-toastify';
import { login } from '../../redux/actions/auth-actions/loginAction';

// form validation useing Yup
const validate = () =>
  Yup.object({
    username: Yup.string().required('username is required'),
    password: Yup.string()
      .min(8, 'Must be more than 8 characters')
      .required('Password is required'),
  });

function LoginForm(props) {
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(login(user))
      .then((res) => {
        toast.success(res, {
          position: toast.POSITION.BOTTOM_LEFT,
          transition: Slide,
        });
        props.history.push('/Companyordertest');
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: false,
        });
      });
  };

  return (
    <Container style={{ marginTop: 50 }}>
      <Row className="justify-content-md-center">
        <Col xs={12} lg={8}>
          <Card>
            <Card.Header> Login </Card.Header>
            <Card.Body>
              <Formik
                initialValues={{
                  username: '',
                  password: '',
                }}
                validationSchema={validate}
                onSubmit={(values, { setSubmitting }) => {
                  const newUser = {
                    username: values.username,
                    password: values.password,
                  };

                  loginUser(newUser);
                  setSubmitting(false);
                }}
              >
                <div className="login-form">
                  <div className="form-container">
                    <Container>
                      <Row className="justify-content-md-center">
                        <Col xs={12}>
                          <Form className="form-horizontal">
                            <div className="form-group">
                              <span className="input-icon">
                                <i className="fa fa-user"></i>
                              </span>
                              <Field
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Enter Username"
                              />
                              <ErrorMessage component={Toast} name="username" />
                            </div>
                            <div className="form-group">
                              <span className="input-icon">
                                <i className="fa fa-lock"></i>
                              </span>
                              <Field
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                              />
                              <ErrorMessage component={Toast} name="password" />
                            </div>
                            <div className="forgot-pass">
                              <a href="/">Lost password?</a>
                            </div>
                            <br></br>
                            <Button
                              variant="primary"
                              type="submit"
                              className="btn signin"
                            >
                              Login
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
