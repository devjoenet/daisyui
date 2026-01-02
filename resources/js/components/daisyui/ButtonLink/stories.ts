import type { Meta, StoryObj } from "@storybook/vue3";
import { useVariantStoriesControl } from "../../../composables/useVariants";
import { useSizeStoriesControl } from "../../../composables/useSizes";
import ButtonLink from "./ButtonLink.vue";

const meta: Meta<typeof ButtonLink> = {
  title: "Components/Navigation/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  argTypes: {
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
    outline: { control: "boolean" },
    soft: { control: "boolean" },
    dash: { control: "boolean" },
    active: { control: "boolean" },
    ghost: { control: "boolean" },
    link: { control: "boolean" },
    wide: { control: "boolean" },
    square: { control: "boolean" },
    circle: { control: "boolean" },
    block: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

const defaultTplStr = `
  <ButtonLink v-bind="args">Default</ButtonLink>
`;

const ButtonSizesTplStr = `
<div class="flex gap-2 items-center">
    <ButtonLink size="xs">Xsmall</ButtonLink>
    <ButtonLink size="sm">Small</ButtonLink>
    <ButtonLink>Medium</ButtonLink>
    <ButtonLink size="lg">Large</ButtonLink>
    <ButtonLink size="xl">Xlarge</ButtonLink>
</div>`;

const ButtonColorsTplStr = `
<div class="flex gap-2 items-center">
    <ButtonLink variant="neutral" v-bind="args">Neutral</ButtonLink>
    <ButtonLink variant="primary" v-bind="args">Primary</ButtonLink>
    <ButtonLink variant="secondary" v-bind="args">Secondary</ButtonLink>
    <ButtonLink variant="accent" v-bind="args">Accent</ButtonLink>
    <ButtonLink variant="info" v-bind="args">Info</ButtonLink>
    <ButtonLink variant="success" v-bind="args">Success</ButtonLink>
    <ButtonLink variant="warning" v-bind="args">Warning</ButtonLink>
    <ButtonLink variant="error" v-bind="args">Error</ButtonLink>
</div>
`;

const ButtonWithControlsTplStr = `
<div class="flex gap-2 items-center">
    <ButtonLink v-bind="args">Default</ButtonLink>
    <ButtonLink variant="primary" v-bind="args">Primary</ButtonLink>
    <ButtonLink variant="secondary" v-bind="args">Secondary</ButtonLink>
    <ButtonLink variant="accent" v-bind="args">Accent</ButtonLink>
    <ButtonLink variant="info" v-bind="args">Info</ButtonLink>
    <ButtonLink variant="success" v-bind="args">Success</ButtonLink>
    <ButtonLink variant="warning" v-bind="args">Warning</ButtonLink>
    <ButtonLink variant="error" v-bind="args">Error</ButtonLink>
</div>
`;

const ButtonGhostAndButtonLinkTplStr = `
<div class="flex gap-2 items-center">
    <ButtonLink :ghost="true" v-bind="args">Ghost</ButtonLink>
    <ButtonLink :link="true" v-bind="args">Link</ButtonLink>
</div>`;

const CircleButtonAndSquareButtonTplStr = `
<div class="flex gap-2 items-center">
    <ButtonLink :circle="true" v-bind="args">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
    </ButtonLink>
    <ButtonLink :square="true" v-bind="args">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
    </ButtonLink>
</div>
`;

const ButtonWithIconTplStr = `
<div class="flex gap-2 items-center">
    <ButtonLink>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
      Like
    </ButtonLink>
    <ButtonLink>
      Like
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
    </ButtonLink>
</div>`;

const ButtonBlockTplStr = `
  <ButtonLink block v-bind="args">Block</ButtonLink>
`;

const ButtonWithLoadingSpinnerTplStr = `
<div class="flex gap-2 items-center">
  <ButtonLink :square="true" v-bind="args">
    <span class="loading loading-spinner"></span>
  </ButtonLink>
  <ButtonLink v-bind="args">
    <span class="loading loading-spinner"></span>
    loading
  </ButtonLink>
</div>
`;

// BUTTON
const TemplateButton: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const DefaultButton = { ...TemplateButton };

// BUTTON SIZES
const ButtonSizesTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: ButtonSizesTplStr,
  }),
};
export const ButtonSizes = { ...ButtonSizesTemplate };

// BUTTON COLORS
const ButtonColorsTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: ButtonColorsTplStr,
  }),
};
export const ButtonColors = { ...ButtonColorsTemplate };

// SOFT BUTTONS
const ButtonWithControlsTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: ButtonWithControlsTplStr,
  }),
};
export const SoftButtons = { ...ButtonWithControlsTemplate };
SoftButtons.args = { soft: true };

// OUTLINE BUTTONS
export const OutlineButtons = { ...ButtonWithControlsTemplate };
OutlineButtons.args = { outline: true };

// GHOST AND LINK BUTTONS
const ButtonGhostAndButtonLinkTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: ButtonGhostAndButtonLinkTplStr,
  }),
};
export const GhostAndLinkButtons = { ...ButtonGhostAndButtonLinkTemplate };

// CIRCLE AND SQUARE BUTTONS
const CircleButtonAndSquareButtonTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: CircleButtonAndSquareButtonTplStr,
  }),
};
export const CircleAndSquareButtons = { ...CircleButtonAndSquareButtonTemplate };

// BUTTON WITH ICON
const ButtonWithIconTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: ButtonWithIconTplStr,
  }),
};
export const ButtonWithIcon = { ...ButtonWithIconTemplate };

// BUTTON BLOCK
const ButtonBlockTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: ButtonBlockTplStr,
  }),
};
export const BlockButton = { ...ButtonBlockTemplate };

// LOADING BUTTON
const ButtonWithLoadingSpinnerTemplate: Story = {
  render: (args: any) => ({
    components: { ButtonLink },
    setup() {
      return { args };
    },
    template: ButtonWithLoadingSpinnerTplStr,
  }),
};
export const LoadingButton = { ...ButtonWithLoadingSpinnerTemplate };
