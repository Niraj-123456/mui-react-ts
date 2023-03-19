import axios from "axios";

export async function fetchCommentsByPostId(postId: string | undefined) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return data;
}
