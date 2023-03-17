import React from "react";
import styles from "./movie-detail.module.css";

import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { useQuery } from "react-query";

import { fetchMovieById } from "../../apis/homeApi";

interface MovieDetail {
  medium_cover_image: string;
  title: string;
  year: number;
  genres: [];
  genre: string;
  description_full: string;
  description_intro: string;
}

const MovieDetail = () => {
  const { id } = useParams();

  const { isLoading, data, error, isError } = useQuery<MovieDetail, Error>({
    queryKey: ["movieById"],
    queryFn: () => fetchMovieById(id),
  });

  function genreToColor(genre: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < genre?.length; i += 1) {
      hash = genre?.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.movie__info}>
        <div className={styles.movie__image__wrapper}>
          <div className={styles.movie__image}>
            <img
              src={data?.medium_cover_image}
              alt={data?.title}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.action__btns}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                width: "100%",
                textTransform: "capitalize",
                background: "#6ac045",
                "&:hover": {
                  background: "#52bf23",
                },
              }}
            >
              Download
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                background: "#00FFE7A3",
                "&:hover": {
                  background: "#23e5d3a3",
                },
              }}
            >
              Watch Now
            </Button>
          </div>
        </div>
        <div className={styles.movie__title}>
          <h1>{data?.title}</h1>
          <h3>{data?.year}</h3>
          <div className={styles.genres}>
            {data?.genres &&
              data?.genres?.length > 0 &&
              data?.genres?.map((genre: string, index: number) => (
                <div
                  className={styles.genre}
                  key={index}
                  style={{ background: genreToColor(genre) }}
                >
                  {genre}
                </div>
              ))}
          </div>
          <div className={styles.intro}>
            <h1>Intro</h1>
            <p>{data?.description_intro}</p>
          </div>
        </div>
        <div className={styles.related__movies__wrapper}>
          <h1>Related Movies</h1>
          <div className={styles.related__movies}>
            <div className={styles.img__wrapper}>
              <img
                src={data?.medium_cover_image}
                alt={data?.title}
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.img__wrapper}>
              <img
                src={data?.medium_cover_image}
                alt={data?.title}
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.img__wrapper}>
              <img
                src={data?.medium_cover_image}
                alt={data?.title}
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.movie__summary}>
        <h1>Plot Summary</h1>
        <p>{data?.description_full}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
