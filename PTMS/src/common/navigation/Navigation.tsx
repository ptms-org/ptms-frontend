import { BottomNav } from "./BottomNav";
import Logo from "../../assets/logoB&W.svg";
import Box from "@mui/material/Box";

export const Navigation = () => {
    
    return (
        <Box >
            <BottomNav />
            <Box
                component="img"
                src={Logo}
                alt="Logo"
            />
        </Box>
    );
};

