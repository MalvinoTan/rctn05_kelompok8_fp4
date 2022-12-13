import axios from "axios";

export const getMovies = async (keyword) => {
    return axios.get(`http://www.omdbapi.com?apikey=5c1d7066&s=${keyword}`);
};

export const getMovieDetail = async (id) => {
    return axios.get(`http://www.omdbapi.com?apikey=5c1d7066&i=${id}`);
};