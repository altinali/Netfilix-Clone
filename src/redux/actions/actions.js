import axios from "axios";
import { actionTypes } from "./actionTypes";
import { options } from "../../constants/apiContants";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// senkron
export const setLoading = (payload) => ({
    type : actionTypes.SET_LOADING,
    payload,
})

// asenkron
export const getMovies = () => {
  return async function (dispatch) {
    const response = await axios.get("/movie/popular", options);

    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: response.data.results,
    });
  };
};

// Filmler için 
export const getGenres=()=>(dispatch)=>{

  axios.get('/genre/movie/list',options).
  //Sonucu Reducera gönderme işlemi
  then((response)=>dispatch({
    type:actionTypes.SET_CATEGORIES,
    payload:response.data.genres
  }))
}


