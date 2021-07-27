import categories from "../data";

const INITIAL = {
  selectedCategory: categories[0],
  selectedMovie: categories[0].movies[0],
  categories: [...categories]
};

const rootReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "CHANGE_MOVIE":
      return {
        ...state,
        selectedCategory: action.selectedCategory,
        selectedMovie: action.selectedMovie
      };
    default:
      return state;
  }
};

export default rootReducer;
