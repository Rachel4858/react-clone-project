import axios from "axios";

const base_url = 'https://api.themoviedb.org/3';
const api_key = '44ebf9cf927b173d893cd89ea3db2e1e';

export const tvApi = {
  topRated: () => axios.get(`${base_url}/tv/top_rated?api_key=${api_key}`),
  popular: () => axios.get(`${base_url}/tv/popular?api_key=${api_key}`),
  airingToday: () => axios.get(`${base_url}/tv/airing_today?api_key=${api_key}`),
  tvDetail: id => axios.get(`${base_url}/tv/${id}?api_key=${api_key}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term =>
    axios.get(`${base_url}/search/tv?api_key=${api_key}`, {
      params: {
        query: encodeURIComponent(term)
      }
    }),
  video: id => axios.get(`${base_url}/movie/${id}/videos?api_key=${api_key}`),
};


export const movieApi = {
  nowPlaying: () => axios.get(`${base_url}/movie/now_playing?api_key=${api_key}`),
  popular: () => axios.get(`${base_url}/movie/popular?api_key=${api_key}`),
  upcoming: () => axios.get(`${base_url}/movie/upcoming?api_key=${api_key}`),
  movieDetail: id => axios.get(`${base_url}/movie/${id}?api_key=${api_key}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term =>
    axios.get(`${base_url}/search/movie?api_key=${api_key}`, {
      params: {
        query: encodeURIComponent(term)
      }
    }),
  video: id => axios.get(`${base_url}/movie/${id}/videos?api_key=${api_key}`),
};

