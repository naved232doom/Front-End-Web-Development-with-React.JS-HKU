import React, { Component } from "react";
import Header from "./header.component";
import Footer from "./footer.component";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./home.component";
import Menu from "../components/menu.component";
import Contact from "./contact.component";
import About from "./about.component";
import DishDetail from "../components/dish.detail.component";
import { addComment, fetchDishes } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});
class Main extends Component {
  constructor(props) {
    super(props);
  }
  // when the main component is about to mounted in the dom we
  // fetch the data
  componentDidMount() {
    this.props.fetchDishes();
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={
            this.props.dishes.dishes.filter((dish) => dish.featured === true)[0]
          }
          dishesLoading={this.props.dishes.isLoading}
          dihsesErrMess={this.props.dishes.errMess}
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
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          ErrMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
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
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          ></Route>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
