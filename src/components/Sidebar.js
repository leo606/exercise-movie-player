import React from "react";

const Sidebar = ({ categories, selectMovie, idMovieSelected }) => {
  return (
    <aside className="categories">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h3 className="category-title">{category.name}</h3>
          <ul className="category-movies">
            {category.movies.map((movie) => (
              <li
                key={movie.id}
                onClick={() => selectMovie(category, movie)}
                className={idMovieSelected === movie.id && "active"}
              >
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
