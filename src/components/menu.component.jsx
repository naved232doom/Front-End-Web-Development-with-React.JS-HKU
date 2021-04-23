import React, { Component } from "react";
import { CardImg, CardText, ListGroupItemHeading, NavItem } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderMenuItems({ dish, onClick }) {
  return (
    <Card key={dish.id} className="col-md-6">
      <Link to={`/menu/${dish.id}`}>
        <h3>{dish.name}</h3>
        <CardImg height="auto" object src={dish.image} alt={dish.name} />
      </Link>
      <CardText>{dish.description}</CardText>
    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <RenderMenuItems dish={dish} />;
  });
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
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
