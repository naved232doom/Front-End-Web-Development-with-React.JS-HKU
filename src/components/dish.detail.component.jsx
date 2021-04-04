import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <>
          <div className="col-md-6">
            <Card>
              <CardImg height="auto" object src={dish.image} alt={dish.name} />
              <CardBody className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
                <p>{dish.description}</p>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <CardBody className="ml-5">
                <h4>Comments</h4>
                <p>
                  {dish.comments.map((curcomment) => {
                    return (
                      <div key={curcomment.id}>
                        <div className="row">{curcomment.author}</div>
                        <div className="row">{curcomment.comment}</div>
                        <span>{curcomment.rating}</span>
                        <span>{curcomment.date}</span>
                      </div>
                    );
                  })}
                </p>
              </CardBody>
            </Card>
          </div>
        </>
      );
    }
  }
  render() {
    return (
      <div className="row">
        {this.renderDish(this.props.selectedDish)}
        </div>
    );
  }
}

export default DishDetail;
