import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
  Label,
} from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
function RenderDish({ dish, comments, addComment, dishId }) {
  if (dish != null) {
    return (
      <>
        <div className="d-flex p-2">
          <Card>
            <CardImg object src={dish.image} alt={dish.name} />
            <CardBody className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
              <p>{dish.description}</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="ml-5">
              <h4>Comments</h4>

              {comments.map((curcomment) => {
                return (
                  <div key={curcomment.id}>
                    <div className="row">{curcomment.author}</div>
                    <div className="row">{curcomment.comment}</div>
                    <span>{curcomment.rating}</span>
                    <span>
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(curcomment.date)))}
                    </span>
                  </div>
                );
              })}
              <div className="mt-5">
                <CommentForm addComment={addComment} dishId={dishId} />
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggleModal = this.toggleModal.bind(this);
  }
  handleSubmit(values) {
    console.log("Current state is " + JSON.stringify(values));
    alert("Current state is " + JSON.stringify(values));
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-comment fa-md"> Submit Comment</span>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <div className="col-12 col-md-9">
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlfor="firstname">Name</Label>
                  <Col>
                    <Control.text
                      model=".firstname"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlfor="message">Rating</Label>
                  <Col className="offset-md-1">
                    <Control.select
                      model=".select"
                      className="form-control"
                      name="contactType"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group ">
                  <Label htmlfor="message">Comments</Label>
                  <Col>
                    <Control.textarea
                      model=".message"
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col className="col-md-10 offset-md-2">
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if(props.errMess){
    return (
      <div className="container">
        <div className="row">
          <h3>{props.errMess}</h3>
        </div>
      </div>
    );
  }
  else if(props.dish!=null)
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>

      <RenderDish
        dish={props.dish}
        comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
      />
    </div>
  );
};

export default DishDetail;
