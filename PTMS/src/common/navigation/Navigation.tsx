import * as React from "react";
import Wrapper from "@mui/material/Box";
import Container from "@mui/material/BottomNavigation";
import NavLink from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import NewProjectIcon from "@mui/icons-material/NoteAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import { useResponsive } from "../mediaQuery";
import { pathsURL } from "../paths";

export const Navigation = () => {
  const [value, setValue] = React.useState(0);
  const { media1070, media890, media630 } = useResponsive();

  return (
    <Wrapper>
      <Container
        sx={{
          background: "#343A40",
       
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
        <NavLink
          label="Home"
          icon={<HomeIcon style={{ fontSize: media630 ? 18 : 30 }} />}
          component={Link}
          to={pathsURL.home}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: media630 ? "10px" : "medium",
              color: "white",
            },
            "& .MuiSvgIcon-root": { 
              fill: "white",
            },
            "&.Mui-selected": { 
              color: "#007BFF",
              "& .MuiSvgIcon-root": {
                fill: "#007BFF", 
              }
            },
          }}
        />
        <NavLink
          label="New project"
          icon={<NewProjectIcon style={{ fontSize: media630 ? 18 : 30 }} />}
          component={Link}
          to={pathsURL.createProject}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: media630 ? "10px" : "medium",
              color: "white",
            },
            "& .MuiSvgIcon-root": { 
              fill: "white",
            },
            "&.Mui-selected": { 
              color: "#007BFF",
              "& .MuiSvgIcon-root": {
                fill: "#007BFF", 
              }
            },
          }}
        />
        <NavLink
          label="User"
          icon={<ManageAccountsIcon style={{ fontSize: media630 ? 18 : 30 }} />}
          component={Link}
          to={pathsURL.user}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: media630 ? "10px" : "medium",
              color: "white",
            },
            "& .MuiSvgIcon-root": { 
              fill: "white",
            },
            "&.Mui-selected": { 
              color: "#007BFF",
              "& .MuiSvgIcon-root": {
                fill: "#007BFF", 
              }
            },
          }}
        />
      </Container>
    </Wrapper>
  );
};
