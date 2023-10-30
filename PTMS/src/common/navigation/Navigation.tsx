import { BottomNav } from "./BottomNav";
import Logo from "../../assets/logoB&W.svg";
import Box from "@mui/material/Box";
import  Grid  from "@mui/material/Grid";

export const Navigation = () => {
    
    return (
        <Grid container spacing={2} 
        sx={{
            background: '#dfdfdf',
            width: "100%", 
            justifyContent: "space-around",
            marginLeft: "auto",            
          
          }}
        >
            <Grid item>
                <Box component="img" src={Logo} alt="Logo" />
            </Grid>
            <Grid item>
                <BottomNav />
            </Grid>
        </Grid>
    );
};

