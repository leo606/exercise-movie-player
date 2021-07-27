// const CHANGE_MOVIE = {type:'CHANGE_MOVIE'};
const changeMovie = (selectedCategory, selectedMovie) => ({
  type: "CHANGE_MOVIE",
  selectedCategory,
  selectedMovie
});

export default changeMovie;
