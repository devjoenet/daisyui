import type { Meta, StoryObj } from "@storybook/vue3";
import Join from "./Join.vue";
import { Button } from "../Button";
import { JOIN_DIRECTIONS } from "./types";

const meta: Meta<typeof Join> = {
  title: "Components/Layout/Join",
  component: Join,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: [...JOIN_DIRECTIONS, undefined],
      description: "The direction of the join component",
    },
    as: {
      control: { type: "text" },
      description: "The HTML element to render the join component as",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Join>;

const defaultTplStr = `
<Join v-bind="args">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Join>
`;

const horizontalTplStr = `
<Join direction="horizontal">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Join>
`;

const verticalTplStr = `
<Join direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Join>
`;

const TemplateJoin: Story = {
  render: (args: any) => ({
    components: { Join, Button },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const DefaultJoin = { ...TemplateJoin };

export const HorizontalJoin: Story = {
  render: () => ({
    components: { Join, Button },
    template: horizontalTplStr,
  }),
};

export const VerticalJoin: Story = {
  render: () => ({
    components: { Join, Button },
    template: verticalTplStr,
  }),
};

export const CustomElementJoin: Story = {
  ...TemplateJoin,
  args: {
    as: "section",
  },
};
