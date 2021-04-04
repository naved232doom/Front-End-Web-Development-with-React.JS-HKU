import React, { Component } from "react";
import { CardImg, CardText, ListGroupItemHeading, NavItem } from "reactstrap";
import { Media } from "reactstrap";
import DishDetail from "../components/dish.detail.component";
import { Card, CardBody, CardTitle, CardImgOverlay } from "reactstrap";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg src={dish.image}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Card
          key={dish.id}
          onClick={() => this.onDishSelect(dish)}
          className="col-12 mt-5"
        >
          <CardImg height="auto" object src={dish.image} alt={dish.name} />
          <CardBody className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
            <p>{dish.description}</p>
          </CardBody>
        </Card>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <DishDetail selectedDish={this.state.selectedDish} />
        </div>
      </div>
    );
  }
}
export default Menu;
