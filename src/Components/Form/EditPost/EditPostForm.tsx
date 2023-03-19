import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./edit-post.module.css";

import { TextField, Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useMutation } from "react-query";

import { editPostById } from "../../../apis/postApis";

interface Post {
  postId: string | undefined;
  title: string;
  body: string;
}

const EditPostForm = () => {
  const location = useLocation();
  const state = location?.state;

  const [formData, setFormData] = useState<Post>({
    postId: state?.id ? state?.id : "",
    title: state?.title ? state?.title : "",
    body: state?.body ? state?.body : "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { mutate, isLoading } = useMutation((data) => editPostById(data), {
    onSuccess: () => console.log("Successfully updated"),
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Edit Post</h1>
        <form className={styles.edit__form} onSubmit={handleSubmit}>
          <TextField
            id="id"
            name="id"
            label="Post ID"
            value={formData?.postId}
            onChange={handleChange}
          />
          <TextField
            id="title"
            name="title"
            label="Title"
            value={formData?.title}
            onChange={handleChange}
          />
          <TextField
            id="body"
            name="body"
            label="Post"
            multiline
            rows={4}
            value={formData?.body}
            onChange={handleChange}
          />
          <Box display={"flex"} gap={2}>
            <Button variant="contained" type="submit">
              Edit
            </Button>
            <Button variant="outlined">Cancel</Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;
