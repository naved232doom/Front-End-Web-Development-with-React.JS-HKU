import React, { Component } from "react";
import { CardImg, CardText, ListGroupItemHeading, NavItem } from "reactstrap";
import { Media } from "reactstrap";
import { Card, CardBody, CardTitle, CardImgOverlay } from "reactstrap";

function RenderMenuItems({dish, onClick}){
  return (
    <Card
          key={dish.id}
         
          className="col-md-6"
        >
          <CardImg height="auto" object src={dish.image} alt={dish.name} />
          <CardBody className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
            <p>{dish.description}</p>
          </CardBody>
        </Card>
  );
}
const Menu = (props) =>{
  const menu = props.dishes.map((dish) => {
      return (
        <RenderMenuItems dish={dish} onClick={props.onClick}/> 
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  
}
  

export default Menu;
