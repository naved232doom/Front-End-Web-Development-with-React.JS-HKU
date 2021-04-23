import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderDish({ dish, comments }) {
  if (dish != null) {
    return (
      <>
        <div className="d-flex flex-row">
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
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}
const DishDetail = (props) => {
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
   
        <RenderDish dish={props.dish} comments={props.comments} />
    </div>
  );
};

export default DishDetail;
