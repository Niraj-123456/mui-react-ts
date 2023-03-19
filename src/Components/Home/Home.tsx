import React from "react";
import styles from "./home.module.css";

import Skeleton from "@mui/material/Skeleton";
import { useQuery } from "react-query";

import MovieCard from "../Common/MovieCard/MovieCard";
import { fetchAllMovies } from "../../apis/homeApi";
interface Movie {
  id: number;
  medium_cover_image: string;
  title: string;
}

const Home = () => {
  const { isLoading, data, isError, error } = useQuery<Movie[], Error>(
    ["movies"],
    fetchAllMovies,
    { retry: 2 }
  );

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
            <div key={index} style={{ width: "100%" }}>
              <Skeleton variant="rectangular" width={"100%"} height={250} />
              <div style={{ marginTop: "10px" }}>
                <Skeleton width={"90%"} />
                <Skeleton width="60%" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {data?.map((movie: Movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
