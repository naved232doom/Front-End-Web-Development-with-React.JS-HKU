import React, { Component } from "react";
import Header from "./header.component";
import Footer from "./footer.component";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home.component";
import Menu from "../components/menu.component";
import Contact from "./contact.component";
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
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => <Menu dishes={this.state.dishes} />}
            ></Route>
            <Route exact path="/contactus" component={Contact}></Route>
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default Main;
