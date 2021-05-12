import React, { Component } from "react";
import Header from "./header.component";
import Footer from "./footer.component";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import Home from "./home.component";
import Menu from "../components/menu.component";
import Contact from "./contact.component";
import About from "./about.component";
import DishDetail from "../components/dish.detail.component";

import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
class Main extends Component {
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured === true)[0]}
          promotions={
            this.props.promotions.filter((dish) => dish.featured === true)[0]
          }
          leaders={
            this.props.leaders.filter((dish) => dish.featured === true)[0]
          }
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    return (
      <>
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          ></Route>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact}></Route>
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
