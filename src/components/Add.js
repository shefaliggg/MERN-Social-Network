import styled from "@emotion/styled";
import {
  Attachment,
  Camera,
  DatasetLinkedSharp,
  Edit,
  FileUploadSharp,
  SentimentSatisfied,
  VideoCallOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { React, useState } from "react";

function Add() {
  const Mymodal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const [Open, setOpen] = useState(false);

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{ position: "fixed", bottom: "20px", left: "20px" }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="edit">
          <Edit />
        </Fab>
      </Tooltip>
      <Mymodal
        open={Open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          border="none"
          borderRadius={5}
          p={2}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Post
          </Typography>

          <UserBox>
            <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src="#" />
            <Typography variant="span">Shefali Gajbhiye</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            placeholder="What's on your mind?"
            multiline
            rows={4}
            variant="standard"
          />

          <Stack direction="row" spacing={2} mt={2} mb={2}>
            <SentimentSatisfied color="primary" />
            <Camera color="seconday" />
            <VideoCallOutlined color="error" />
            <Attachment color="success" />
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button><DatasetLinkedSharp/></Button>
</ButtonGroup>
        </Box>
      </Mymodal>
    </>
  );
}

export default Add;
