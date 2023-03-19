import React from "react";
import styles from "./post-detail.module.css";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { IconButton, Tooltip, Skeleton } from "@mui/material";
import { Delete, BorderColor } from "@mui/icons-material";

import { fetchPostById } from "../../apis/postApis";
import Comments from "../Comments/Comments";

interface Post {
  title: string;
  body: string;
}

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    data: post,
    isError,
    error,
  } = useQuery<Post, Error>({
    queryKey: ["postById"],
    queryFn: () => fetchPostById(id),
  });

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={200}
            height={30}
          />
          {[1, 2, 3].map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              animation="wave"
              width={"100%"}
              height={8}
              sx={{ marginTop: 2 }}
            />
          ))}
          <Skeleton
            variant="rounded"
            animation="wave"
            width={"60%"}
            height={8}
            sx={{ marginTop: 2 }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.post__title}>{post?.title}</div>
        <div className={styles.post__body}>{post?.body}</div>
        <div className={styles.post__actions}>
          <Tooltip title="Edit" placement="top" arrow>
            <IconButton
              color="primary"
              size="small"
              onClick={() =>
                navigate({ pathname: `/post/${id}/edit` }, { state: post })
              }
            >
              <BorderColor sx={{ fontSize: "16px" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="top" arrow>
            <IconButton color="error" size="small">
              <Delete sx={{ fontSize: "16px" }} />
            </IconButton>
          </Tooltip>
        </div>
        <Comments postId={id} />
      </div>
    </div>
  );
}

export default PostDetail;
