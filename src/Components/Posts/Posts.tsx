import React from "react";
import { Link } from "react-router-dom";
import styles from "./posts.module.css";

import WritePost from "../WritePost/WritePost";
import PostCard from "../Common/PostCard/PostCard";
import LoadingScreen from "../Common/LoadingScreen/LoadingScreen";
import { fetchAllPosts } from "../../apis/postApis";

import { useQuery } from "react-query";

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
    return <LoadingScreen />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <WritePost />
        {data?.map((post: Post) => (
          <Link key={post?.id} to={`/${post?.id}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
