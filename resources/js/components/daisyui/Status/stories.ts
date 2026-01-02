import type { Meta, StoryObj } from "@storybook/vue3";
import Status from "./status.vue";

const meta: Meta<typeof Status> = {
  title: "Components/DataDisplay/Status",
  component: Status,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Status>;

const defaultTplStr = `
  <Status v-bind="args" />
`;
const StatusSizesTplStr = `
<div class="flex gap-2 items-center">
  <Status size="xs" />
  <Status size="sm" />
  <Status size="md" />
  <Status size="lg" />
  <Status size="xl" />
</div>
`;
const StatusWithColorsTplStr = `
<div class="flex gap-2 items-center">
  <Status variant="primary" />
  <Status variant="secondary" />
  <Status variant="accent" />
  <Status variant="neutral" />
  <Status variant="info" />
  <Status variant="success" />
  <Status variant="warning" />
  <Status variant="error" />
</div>`;
const StatusWithPingAnimationTplStr = `
<Status variant="info" ping /> Server is down`;
const StatusWithBounceAnimationTplStr = `
<Status variant="info" bounce /> Unread messages`;

// DEFAULT

const DefaultTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...DefaultTemplate };
Default.args = {};

// STATUS SIZES

const StatusSizesTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusSizesTplStr,
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: StatusSizesTplStr,
        language: "html",
      },
    },
  },
};
export const StatusSizes = { ...StatusSizesTemplate };
StatusSizes.args = {};

// STATUS COLOR

const StatusWithColorsTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusWithColorsTplStr,
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: StatusWithColorsTplStr,
        language: "html",
      },
    },
  },
};
export const StatusWithColors = { ...StatusWithColorsTemplate };
StatusWithColors.args = {};

// STATUS WITH PING ANIMATION
const StatusWithPingAnimationTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusWithPingAnimationTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: StatusWithPingAnimationTplStr,
        language: "html",
      },
    },
  },
};
export const StatusWithPingAnimation = { ...StatusWithPingAnimationTemplate };

// STATUS WITH BOUNCE ANIMATION
const StatusWithBounceAnimationTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusWithBounceAnimationTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: StatusWithBounceAnimationTplStr,
        language: "html",
      },
    },
  },
};
export const StatusWithBounceAnimation = { ...StatusWithBounceAnimationTemplate };
