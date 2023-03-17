import React from "react";
import styles from "./movie-card.module.css";
import { Link } from "react-router-dom";

import { movieProps } from "../../../types/movie";

function MovieCard({ movie }: movieProps) {
  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie?.id}`}>
        <div className={styles.card__media}>
          <img src={movie?.medium_cover_image} />
        </div>
      </Link>
      <div className={styles.card__content}>
        <h1
          style={{
            overflowY: "hidden",
            textOverflow: "ellipsis",
            height: "100px",
          }}
        >
          {movie?.title}
        </h1>
      </div>
    </div>
  );
}

export default MovieCard;
