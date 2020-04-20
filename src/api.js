import axios from "axios";

const base_url = 'https://api.themoviedb.org/3';
const api_key = '44ebf9cf927b173d893cd89ea3db2e1e';

export const tvApi = {
  topRated: () => axios.get(`${base_url}/tv/top_rated?api_key=${api_key}`),
  popular: () => axios.get(`${base_url}/tv/popular?api_key=${api_key}`),
  airingToday: () => axios.get(`${base_url}/tv/airing_today?api_key=${api_key}`),
  showDetail: id => axios.get(`${base_url}/tv/${id}?api_key=${api_key}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term =>
    axios.get(`${base_url}/search/tv?api_key=${api_key}`, {
      params: {
        query: encodeURIComponent(term)
      }
    })
};