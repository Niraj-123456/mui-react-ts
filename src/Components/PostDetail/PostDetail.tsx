import React from "react";
import { useParams } from "react-router-dom";

import { fetchCommentById } from "../../apis/postApis";
import LoadingScreen from "../Common/LoadingScreen/LoadingScreen";

import { useQuery } from "react-query";

interface Comment {
  id: number;
  body: string;
}

function PostDetail() {
  const { id } = useParams();

  const { isLoading, data, isError, error } = useQuery<Comment[], Error>({
    queryKey: ["postById"],
    queryFn: () => fetchCommentById(id),
  });

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      {data?.map((comment: Comment) => (
        <div key={comment?.id}>{comment?.body}</div>
      ))}
    </div>
  );
}

export default PostDetail;
