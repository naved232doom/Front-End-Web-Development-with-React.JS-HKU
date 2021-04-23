import React, { Component } from "react";
import Header from "./header.component";
import Footer from "./footer.component";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home.component";
import Menu from "../components/menu.component";
import Contact from "./contact.component";
import About from "./about.component";
import COMMENTS from "../data-values/comments";
import LEADERS from "../data-values/leaders";
import PROMOTIONS from "../data-values/promotion";
import DishDetail from "../components/dish.detail.component";
import DISHES from "../data-values/dish.data";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured == true)[0]}
          promotions={
            this.state.promotions.filter((dish) => dish.featured == true)[0]
          }
          leaders={
            this.state.leaders.filter((dish) => dish.featured == true)[0]
          }
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
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
              component={() => <Menu dishes={this.state.dishes} />}
            ></Route>
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact}></Route>
            <Route
              exact
              path="/aboutus"
              component={() => <About leaders={this.state.leaders} />}
            />
            <Redirect to="/home" />
          </Switch>
        
        <Footer />
      </>
    );
  }
}

export default Main;
