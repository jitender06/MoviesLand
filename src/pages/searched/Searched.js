import React, { useState, useEffect } from "react";
import "./Searched.css";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../../components/card/card.css";
import { Link } from "react-router-dom";

function Searched() {
  const [movies, setMovies] = useState([]);
  let { search } = useParams();

  const getSearched = async (name) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5ef178e79abecb1cd035030de4ea438c&query=${name}`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getSearched(search);
  }, [search]);

  // for skeleton display before the api data display
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <Link
              rel="noreferrer"
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="cards">
                <img
                  alt="movie"
                  className="cards__img"
                  src={`https://image.tmdb.org/t/p/original${
                    movie ? movie.poster_path : ""
                  }`}
                />
                <div className="cards__overlay">
                  <div className="card__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="card__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="card__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="card__description">
                    {movie ? movie.overview.slice(0, 118) + "..." : ""}
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
}

export default Searched;
