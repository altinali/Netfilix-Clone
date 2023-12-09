import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { baseImageURL } from "../constants/apiContants";

const Hero = () => {
  // ! Store a abone olma
  const { movieList, isLoading } = useSelector((store) => ({
    movieList: store.movieReducer.popularMovies,
    isLoading: store.movieReducer.isLoading,
  }));
  // Rasgele index üret
  const randomIndex = Math.floor(Math.random() * movieList.length);

  const randomMovie = movieList[randomIndex];
  // title,
  // overview,
  // vote_average,
  // backdrop_path,
  // id

  return (
    <div className="row p-4">
      {/* Eger Veri Çekme Sürüyorsa */}
      {isLoading && <Loading />}
      {/* Veri Çekme işlemi bittiyse */}
      {!isLoading && (
        <>
          <div className="col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center">
            <h1>{randomMovie?.title}</h1>
            <p>{randomMovie.overview}</p>
            <p className="text-warning fw-bold">IMDB {randomMovie.vote_average}</p>
            <div className="d-flex gap-3">
              <Link className="btn btn-danger" to={`/movie/${randomMovie.id}`}>
                Filmi İzle
              </Link>
              <Link className="btn btn-info">Listeye Ekle</Link>
            </div>
          </div>
          <div className="col-md-6 ">
           <img className="img-fluid" src={`${baseImageURL}${randomMovie.backdrop_path}`} alt="Movie Image" />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
