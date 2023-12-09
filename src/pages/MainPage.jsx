import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();

  const {genres} = useSelector((store) =>( {genres:store.movieReducer.genres}))

  useEffect(() => {
    dispatch(setLoading(true))
    // Film çekme işlemini tetikleme
    dispatch(getMovies());
    // Kategori çekme işlemişni tetikleme
    dispatch(getGenres())
  }, []);

  return (
    <div>
      <Hero />
      <div className="p-4">
      {
        genres.map((genre) => (
          <MovieList key={genre.id} genre={genre}/>
        ))
      }
      </div>
    </div>
  );
};

export default MainPage;
