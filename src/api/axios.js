import axios from "axios";

console.log(process.env)

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
