import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

const renderDish = (dish) => {
  if (dish != null) {
    return (
      <>
        <Card >
          <CardImg height="auto" object src={dish.image} alt={dish.name} />
          <CardBody className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
            <p>{dish.description}</p>
          </CardBody>
        </Card>

        <Card >
          <CardBody className="ml-5">
            <h4>Comments</h4>

            {dish.comments.map((curcomment) => {
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
      </>
    );
  }
};
const DishDetail = (props) => {
  return <div className='row'>{renderDish(props.dish)}</div>;
};

export default DishDetail;
