import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import { useResponsive } from "../mediaQuery";

export const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const { media1070, media890, media630 } = useResponsive();

  return (
    <Box>
      <BottomNavigation
        sx={{
          background: "#dfdfdf",
          minHeight: media630 ? 50 : 100,
          marginRight: media890 ? 5 : media630 ? 1 : 10,
          minWidth: media630 ? 250 : media1070 ? 330 : 700,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon style={{ fontSize: media630 ? 18 : 30 }} />}
          component={Link}
          to="/Home"
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: media630 ? "10px" : "medium",
            },
          }}
        />
        <BottomNavigationAction
          label="New project"
          icon={<NoteAddIcon style={{ fontSize: media630 ? 18 : 30 }} />}
          component={Link}
          to="/CreateProject"
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: media630 ? "10px" : "medium",
            },
          }}
        />
        <BottomNavigationAction
          label="User"
          icon={<ManageAccountsIcon style={{ fontSize: media630 ? 18 : 30 }} />}
          component={Link}
          to="/User"
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: media630 ? "10px" : "medium",
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
};
