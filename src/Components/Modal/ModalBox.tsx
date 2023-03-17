import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styled from "styled-components";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const ModalBox = (props: ModalProps) => {
  const { open, handleClose } = props;

  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("form values", state);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <CloseIconWrapper>
          <CloseIcon
            onClick={handleClose}
            sx={{ cursor: "pointer", fontSize: "28px", color: "#a9a9a9" }}
          />
        </CloseIconWrapper>
        <Typography variant="h4">Hello</Typography>
        <Typography>Please fill out the form below.</Typography>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={state?.name}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={state?.email}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={state?.phoneNumber}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <TextField
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={state?.message}
              onChange={handleChange}
            />
          </InputGroup>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100px",
              height: "45px",
              background: "green",
              letterSpacing: "1.5px",
            }}
          >
            Submit
          </Button>
        </Form>
      </Box>
    </Modal>
  );
};

export default ModalBox;

const CloseIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Form = styled.form`
  margin-top: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;
