import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addCompanyOrder } from '../../actions/companyOrderActions';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../common/Spinner';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Button, Container, Toast, Row, Card, Col } from 'react-bootstrap';

// form validation useing Yup
const validate = () =>
  Yup.object({
    orderName: Yup.string()
      .min(2, 'Must be more then one character')
      .required('This field is required'),
    date: Yup.date().required('This field is required'),
    orderQuantity: Yup.number().required('This field is required'),
    orderSupplier: Yup.string()
      .min(2, 'Must be more then one character')
      .required('This field is required'),
    orderCost: Yup.number().required('This field is required'),
    oderTax: Yup.number().required('This field is required'),
    supplierName: Yup.string()
      .min(2, 'Must be more then one character')
      .required('This field is required'),
    supplierAddress: Yup.string()
      .min(2, 'Must be more then one character')
      .required('This field is required'),
    supplierPhone: Yup.string()
      .min(2, 'Must be more then one character')
      .required('This field is required'),
    supplierEmail: Yup.string().email().required('This field is required'),
  });

// react redux method to dispatch our functions
const dispatch = useDispatch();
class Companyorder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const newOrder = {};

    this.props.addCompanyOrder(newOrder);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <Card>
              <Card.Header>Company Order Form</Card.Header>
              <Card.Body>
                <Container fluid>
                  <Row>
                    <Col>
                      <h1 className="dashboard-headline">Add product</h1>
                      <Formik
                        initialValues={{
                          orderName: '',
                          date: '',
                          orderQuantity: '',
                          orderSupplier: '',
                          orderCost: '',
                          oderTax: '',
                          supplierName: '',
                          supplierAddress: '',
                          supplierPhone: '',
                          supplierEmail: '',
                          errors: {},
                        }}
                        // validationSchema={validate}
                        onSubmit={(values, { setSubmitting }) => {
                          const newProduct = {
                            orderName: values.orderName,
                            date: values.date,
                            orderQuantity: values.orderQuantity,
                            orderSupplier: values.orderSupplier,
                            orderCost: values.orderCost,
                            oderTax: values.oderTax,
                            supplierName: values.supplierName,
                            supplierAddress: values.supplierAddress,
                            supplierPhone: values.supplierPhone,
                            supplierEmail: values.supplierEmail,
                          };

                          this.onSubmit(newProduct);

                          setSubmitting(false);
                        }}
                      >
                        <Form
                          className="add-category-form"
                          action="/api/companyorder/create"
                          method="post"
                          encType="multipart/form-data"
                        >
                          {/* Order Name */}
                          <div className="form-group">
                            <Field
                              type="text"
                              name="orderName"
                              className="form-control"
                              placeholder="Enter Order Name"
                            />
                            <ErrorMessage component={Toast} name="orderName" />
                          </div>
                          {/* Order Date */}
                          <div className="form-group">
                            <Field
                              type="date"
                              name="date"
                              className="form-control"
                            />
                            <ErrorMessage component={Toast} name="date" />
                          </div>
                          {/* Order Quantity */}
                          <div className="form-group">
                            <Field
                              type="number"
                              name="orderQuantity"
                              className="form-control"
                              placeholder="Enter Order Quantity"
                            />
                            <ErrorMessage
                              component={Toast}
                              name="orderQuantity"
                            />
                          </div>
                          {/* Order Supplier */}
                          <div className="form-group">
                            <Field
                              type="text"
                              name="orderSupplier"
                              className="form-control"
                              placeholder="Enter Order Supplier"
                            />
                            <ErrorMessage
                              component={Toast}
                              name="orderSupplier"
                            />
                          </div>
                          {/* Order Cost */}
                          <div className="form-group">
                            <Field
                              type="text"
                              name="orderCost"
                              className="form-control"
                              placeholder="Enter Order Cost"
                            />
                            <ErrorMessage component={Toast} name="orderCost" />
                          </div>
                          {/* Order Tax */}
                          <div className="form-group">
                            <Field
                              type="text"
                              name="oderTax"
                              className="form-control"
                              placeholder="Enter Order Tax"
                            />
                            <ErrorMessage component={Toast} name="oderTax" />
                          </div>
                          <Card>
                            <Card.Header>Supplier Info</Card.Header>
                            <Card.Body>
                              {/* Suppier Name  */}
                              <div className="form-group">
                                <Field
                                  type="text"
                                  name="supplierName"
                                  className="form-control"
                                  placeholder="Supplier Name"
                                />
                                <ErrorMessage
                                  component={Toast}
                                  name="supplierName"
                                />
                              </div>
                              {/* Suppier Address  */}
                              <div className="form-group">
                                <Field
                                  type="text"
                                  name="supplierAddress"
                                  className="form-control"
                                  placeholder="Supplier Address"
                                />
                                <ErrorMessage
                                  component={Toast}
                                  name="supplierAddress"
                                />
                              </div>
                              {/* Suppier Phone  */}
                              <div className="form-group">
                                <Field
                                  type="text"
                                  name="supplierPhone"
                                  className="form-control"
                                  placeholder="Supplier Phone"
                                />
                                <ErrorMessage
                                  component={Toast}
                                  name="supplierPhone"
                                />
                              </div>
                              {/* Suppier Email  */}
                              <div className="form-group">
                                <Field
                                  type="email"
                                  name="supplierEmail"
                                  className="form-control"
                                  placeholder="Supplier Email"
                                />
                                <ErrorMessage
                                  component={Toast}
                                  name="supplierEmail"
                                />
                              </div>
                            </Card.Body>
                          </Card>
                          <Button variant="primary" size="lg" block>
                            Place Order{' '}
                          </Button>{' '}
                        </Form>
                      </Formik>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

Companyorder.propTypes = {
  addCompanyOrder: PropTypes.func.isRequired,
  co_order: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  co_order: state.co_order,
  errors: state.errors,
});

export default connect(mapStateToProps, { addCompanyOrder })(
  withRouter(Companyorder)
);
