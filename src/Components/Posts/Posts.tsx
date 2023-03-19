import React from "react";
import { Link } from "react-router-dom";
import styles from "./posts.module.css";

import WritePost from "../WritePost/WritePost";
import PostCard from "../Common/PostCard/PostCard";
import { fetchAllPosts } from "../../apis/postApis";

import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";

interface Post {
  id: number;
  title: string;
  body: string;
}

function Posts() {
  const { isLoading, data, error, isError } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Skeleton variant="rectangular" width={"100%"} height={80} />
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={"100%"}
              height={300}
            />
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
        <WritePost />
        {data?.map((post: Post) => (
          <Link key={post?.id} to={`/post/${post?.id}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
