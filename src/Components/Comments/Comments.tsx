import React from "react";
import styles from "./comments.module.css";

import { useQuery } from "react-query";
import { Avatar, Skeleton, Box } from "@mui/material";

import { fetchCommentsByPostId } from "../../apis/commentApis";

interface Comments {
  postId: string | undefined;
}

interface Comment {
  id: number;
  body: string;
}

function Comments({ postId }: Comments) {
  //fetch comments by post id
  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useQuery<Comment[], Error>(["commentsById"], () =>
    fetchCommentsByPostId(postId)
  );

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className={styles.comments}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="20%"
          height="20px"
        />
        <div className={styles.content}>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className={styles.comment}>
              <Skeleton
                variant="circular"
                animation="wave"
                width={40}
                height={40}
              />

              <Box
                width="100%"
                display={"flex"}
                flexDirection={"column"}
                gap={1}
              >
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={"100%"}
                  height={8}
                />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={"50%"}
                  height={8}
                />
              </Box>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.comments}>
      <h3>Comments</h3>
      <div className={styles.content}>
        {comments?.map((comment: Comment) => (
          <div key={comment?.id} className={styles.comment}>
            <Avatar
              src="/vite.svg"
              sx={{ width: 30, height: 30, fontSize: 14 }}
            >
              N
            </Avatar>
            <p>{comment?.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
