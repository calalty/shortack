import { TextLink } from "@/components/ui/link";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextLink> = {
  title: "Atoms/TextLink",
  component: TextLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
    url: "#",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
    url: "#",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
    url: "#",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
    url: "#",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
    url: "#",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
    url: "#",
  },
};
