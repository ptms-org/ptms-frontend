import { BottomNav } from "./BottomNav";
import Logo from "../../assets/logoB&W.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import { useResponsive } from "../mediaQuery";

export const Navigation = () => {
  const { media630, media580, media420 } = useResponsive();
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          background: "#dfdfdf",
          width: "100%",
          justifyContent: media420 ? "center" : "space-between",
          flexWrap: "wrap",
          marginLeft: "auto",
        }}
      >
        <Grid item>
          <Box
            sx={{
              width: media630 ? 120 : "auto",
              padding: media580 ? "10px" : 1,
              paddingBottom: 0,
            }}
            component="img"
            src={Logo}
            alt="Logo"
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: 0,
          }}
        >
          <BottomNav />
        </Grid>
      </Grid>
      <main>
        <Outlet />
      </main>
    </>
  );
};
