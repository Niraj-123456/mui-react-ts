import axios from "axios";

interface Post {
  postId: string | undefined;
  title: string;
  body: string;
}

export async function fetchAllPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}

export async function fetchPostById(id: string | undefined) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
}

export async function fetchCommentById(id: string | undefined) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
}

export async function editPostById(data: Post) {
  await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${data?.postId}`,
    {
      id: data?.postId,
      title: data?.title,
      body: data?.body,
    }
  );
}
