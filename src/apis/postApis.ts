import axios from "axios";

export async function fetchAllPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}

export async function fetchCommentById(id: string | undefined) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
}
