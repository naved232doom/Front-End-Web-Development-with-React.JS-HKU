import React  from "react";
import { CardImg, CardText } from "reactstrap";
import {
  Card,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
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
  const menu = props.dishes.dishes.map((dish) => {
    return <RenderMenuItems dish={dish} />;
  });
  if(props.dishes.isLoading){
    return (
      <div className='container'>
        <div className='row'>
          <Loading/>
        </div>
      </div>
    )
  }
  else if(props.dishes.errMess){
    return (
        <div className='container'>
        <div className='row'>
        <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    )
  }
  else
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
