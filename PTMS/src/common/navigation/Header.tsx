import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useResponsive } from "../mediaQuery";
import { Navigation } from "./Navigation";
import Logo from "../../assets/logoB&W.svg";

export const Header = () => {
  const { media630, media580, media420 } = useResponsive();

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
          background: "#343A40",
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
              color: "#fff",
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
          <Navigation />
        </Grid>
      </Grid>
    </>
  );
};
