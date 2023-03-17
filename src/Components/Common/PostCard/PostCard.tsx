import React, { useState } from "react";
import styles from "./post-card.module.css";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

interface Post {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

function PostCard({ post }: Post) {
  const [like, setLike] = useState<number>(0);
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <h1>{post?.title}</h1>
        <span>Posted 3hrs ago</span>
      </div>
      <div className={styles.card__media}>
        <img src="http://placekitten.com/400/200" />
      </div>
      <div className={styles.card__content}>
        <p>{post?.body}</p>
      </div>
      <div className={styles.card__action}>
        <div className={styles.action}>
          <ThumbUpAltOutlinedIcon
            className={styles.action__btn}
            onClick={() => setLike((prev) => prev + 1)}
          />
          <span>{like}</span>
        </div>
        <div className={styles.action}>
          <ThumbDownAltOutlinedIcon className={styles.action__btn} />
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
