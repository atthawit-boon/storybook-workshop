import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Design System/Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    size: {
      control: "text",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  parameters: {
    backgrounds: {
      options: {
        red: { name: "Red", value: "#f00" },
        green: { name: "Green", value: "#0f0" },
        blue: { name: "Blue", value: "#00f" },
      },
    },
  },
  args: {
    size: "large",
    ...Secondary.args,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
