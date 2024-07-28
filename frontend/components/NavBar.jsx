import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function DenseAppBar() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleMenu1Open = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  
  const handleMenu1Close = () => {
    setAnchorEl1(null);
  };

  const handleMenu2Open = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenu2Close = () => {
    setAnchorEl2(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:"#152238",
          width: "100%",
          height: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1, fontSize: "25px", marginLeft:"100px" }}
          >
            Hand Font Project
          </Typography>
          
          
          <Menu
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={handleMenu2Close}
          ></Menu>
        </Toolbar>
      </AppBar>
      {/* Add some content to push the main content below the AppBar */}
      <Toolbar />
    </Box>
  );
}
