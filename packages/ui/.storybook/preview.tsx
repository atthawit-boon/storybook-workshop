import React from "react";
import type { Preview } from "@storybook/react-vite";
import { Watermark } from "../src/stories/Watermark";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Watermark>
        <Story />
      </Watermark>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Design System",
          [
            "Pages",
            ["Design Guideline", ["Do/Don't", "Company Identity"]],
            "Inputs",
            "Navigations",
            "*",
          ],
        ],
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
