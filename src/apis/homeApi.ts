import axios from "axios";

export async function fetchAllMovies() {
  const { data } = await axios.get("https://yts.mx/api/v2/list_movies.json");
  return data?.data?.movies;
}

export async function fetchMovieById(id: string | undefined) {
  const { data } = await axios.get(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );
  return data?.data?.movie;
}
