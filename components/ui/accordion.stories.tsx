import { Accordion } from "@/components/ui/accordion";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    additionalClassName: "w-[300px]",
    items: [
      {
        title: "Is it accessible?",
        children: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        title: "Is it styled?",
        children:
          "Yes. It comes with default styles that matches the other components' aesthetic.",
      },
      {
        title: "Is it animated?",
        children:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
  },
};
