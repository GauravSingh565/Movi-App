import React, { useEffect, useState } from "react";
import "./index.css";
import Card from "./component/card/Card";
import Input from "./component/input/Input";

const movieApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=622e8b6504d279457514db4e7769c95e&page=1";

const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=622e8b6504d279457514db4e7769c95e&query=";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovie = async (api) => {
    const response = await fetch(api);
    const movieData = await response.json();

    setMovie(movieData.results);
  };
  useEffect(() => {
    getMovie(movieApi);
  }, []);

  const submitEvent = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      getMovie(searchApi + searchTerm);
      setSearchTerm("");
    }
  };

  const inputEvent = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitEvent}>
          <Input val={searchTerm} event={inputEvent} />
        </form>
        <div className="movieContainer">
          {movie.map((movie) => {
            return (
              <Card
                title={movie.title}
                rating={movie.vote_average}
                img={movie.poster_path}
                overview={movie.overview}
                key={movie.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
