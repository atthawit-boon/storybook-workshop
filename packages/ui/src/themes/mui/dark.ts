import { createTheme } from "@mui/material";
import { dark as darkTheme } from "@repo/ui-preset";

export const muiDarkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkTheme,
  },
});