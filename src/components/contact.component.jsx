import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
    this.handleBlur= this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    console.log("Current state is " + JSON.stringify(this.state));
    alert("Current state is " + JSON.stringify(this.state));
    event.preventDefault();
  }
  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  // validate the form inputs
  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };
    if (this.state.touched.firstname && this.state.firstname.length < 3)
      errors.firstname = "First Name should be greater than 3 characters";
    else if (this.state.touched.firstname && this.state.firstname.length > 10)
      errors.firstname = "First Name should not exceed 10 characters";
    if (this.state.touched.lastname && this.state.lastname.length < 3)
      errors.lastname = "Last Name should be greater than 3 characters";
    else if (this.state.touched.lastname && this.state.lastname.length > 10)
      errors.lastname = "Last Name should not exceed 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum)) {
      errors.telnum = "Tel Num should contain only numbers";
    } else if (
      this.state.touched.telnum &&
      reg.test(telnum) &&
      (telnum.length > 10 || telnum.length < 10)
    ) {
      errors.telnum = "Tel Num should have a length of 10 only";
    }

    // check the @ in email
    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      errors.email = "Email should contain a @ sign";
    }

    return errors;
  }
  render() {
    // everytime there is change the form gets re rendered
   
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlfor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstname")}
                  />
                  <FormFeedback>{errors.firstname} </FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={this.handleBlur("lastname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname} </FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="telnum" md={2}>
                  Tel Num
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Telephone Number"
                    value={this.state.telnum}
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    onBlur={this.handleBlur("telnum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.telnum} </FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.email} </FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <FormGroup check className="col-md-6 offset-md-2">
                  <label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    />{" "}
                    <strong>May we contact you?</strong>
                  </label>
                </FormGroup>
                <Col className="col-md-3 offset-md-1">
                  <Input
                    type="select"
                    value={this.state.contactType}
                    name="contactType"
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlfor="message" md={2}>
                  Your feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="10"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col className="col-md-10 offset-md-2">
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
