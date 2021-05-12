import DISHES from "../data-values/dish.data";
import COMMENTS from "../data-values/comments";
import LEADERS from "../data-values/leaders";
import PROMOTIONS from "../data-values/promotion";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
