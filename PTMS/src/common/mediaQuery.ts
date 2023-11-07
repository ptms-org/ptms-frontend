import { useMediaQuery } from '@mui/material';

export const useResponsive = () => {
  const media1070 = useMediaQuery("(max-width:1070px)");
  const media890 = useMediaQuery("(max-width:890px)");
  const media630 = useMediaQuery("(max-width:630px)");
  const media580 = useMediaQuery("(max-width:580px)");
  const media420 = useMediaQuery("(max-width:420px)");

  return { media1070, media890, media630, media580, media420 };
};

