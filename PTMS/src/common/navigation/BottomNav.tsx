import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";


export const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        
      }}
    >
      <BottomNavigation
        sx={{
          background: '#dfdfdf',
          height: 100,
          minWidth: 600,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Create new project"
          icon={<NoteAddIcon />}
        />
        <BottomNavigationAction label="User" icon={<ManageAccountsIcon />} />
      </BottomNavigation>
    </Box>
  );
};
