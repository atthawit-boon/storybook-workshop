import { createTheme } from "@mui/material";
import { light as lightTheme } from "@repo/ui-preset";

export const muiLightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightTheme,
  },
});
