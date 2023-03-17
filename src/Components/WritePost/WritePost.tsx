import React from "react";
import styles from "./write-post.module.css";

import { TextField, Button } from "@mui/material";

function WritePost() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Share a Post</h1>
        <div className={styles.post__input}>
          <TextField label="Your Post" size="small" sx={{ width: "100%" }} />
          <Button variant="contained">Post</Button>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
