import React from "react";
// import categories from "./data";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import "./App.css";
import { connect } from "react-redux";
import changeMovie from "./actions/index";
//lasdjnf ajsdf
// criar a store
// criar as actions e reducers
// conectar o componente
// criar o mapStateToProps - para lerd
// criar o mapDispatchToProps - para disparar a action

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     categories: [...categories],
  //     selectedCategory: categories[0],
  //     selectedMovie: categories[0].movies[0]
  //   };
  // }

  handleSelectMovie = (selectedCategory, selectedMovie) =>
    this.props.handleMovie(selectedCategory, selectedMovie);

  render() {
    console.log(this.props);
    const { categories, selectedCategory, selectedMovie } = this.props;
    return (
      <main className="app">
        <Player category={selectedCategory} movie={selectedMovie} />
        <Sidebar
          categories={categories}
          idMovieSelected={selectedMovie.id}
          selectMovie={this.handleSelectMovie}
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  selectedCategory: state.selectedCategory,
  selectedMovie: state.selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  handleMovie: (selectedCategory, selectedMovie) =>
    dispatch(changeMovie(selectedCategory, selectedMovie))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
