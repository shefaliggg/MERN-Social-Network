import {
  Brightness2,
  Brightness3,
  DraftsRounded,
  ExpandLess,
  ExpandMore,
  Inbox,
  InboxRounded,
  SendOutlined,
  StarBorder,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import React from "react";

function Sidebar({setMode, Mode}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      flex={1}
      p={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
          borderRight:"1px solid #ccc"
        },
      }}
    >

    <Box sx={{position:"fixed"}}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        <ListItemButton>
          <ListItemIcon>
            <SendOutlined />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsRounded />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxRounded />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <Brightness2 />
          </ListItemIcon>
          <Switch onChange={e=>setMode(Mode=="light"?"dark":"light")} />
        </ListItemButton>
      </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
