import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGY3MmY3MzlhODYxNjg2ZDNmNTQxZDc4M2VhYmMyMiIsIm5iZiI6MTcyNTI3NjUwNS41MjY0NDcsInN1YiI6IjY2ZDVhMDVmM2Y3OGE4MWU3NjAyMGZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJLJQix9yR_nW9953hDQY02X-ox8vmxjy2xjpd7uujo";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
