import React from "react";
import type { Preview } from "@storybook/react-vite";
import { muiDarkTheme, muiLightTheme } from "../src/themes/mui";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush" as const,
      dynamicTitle: true,
      items: [
        { value: "light", title: "Light mode" },
        { value: "dark", title: "Dark mode" },
      ],
    },
  },
};

const themes = {
  light: muiLightTheme,
  dark: muiDarkTheme,
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  return (
    <ThemeProvider theme={themes[themeKey] || themes["light"]}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

const kindleViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

const preview: Preview = {
  globalTypes,
  decorators: [withMuiTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    viewport: {
      options: 
      { 
        ...INITIAL_VIEWPORTS,
        ...kindleViewports,
      },
    },
  },
};

export default preview;
