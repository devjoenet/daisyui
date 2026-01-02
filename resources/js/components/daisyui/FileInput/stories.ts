import type { Meta, StoryObj } from "@storybook/vue3";
import FileInput from "./FileInput.vue";
import { useVariantStoriesControl } from "../../composables/useVariants";
import { useSizeStoriesControl } from "../../composables/useSizes";
import type { ArgTypes } from "@storybook/vue3";

const meta: Meta<typeof FileInput> = {
  title: "Components/DataInput/FileInput",
  component: FileInput,
  tags: ["autodocs"],
  argTypes: {
    ...(() => {
      const { size, ...restSize } = useSizeStoriesControl as ArgTypes;
      const { variant, ...restVariant } = useVariantStoriesControl as ArgTypes;
      return { ...restSize, ...restVariant };
    })(),
    size: {
      control: { type: "select" },
      options: ["default", "xs", "sm", "md", "lg", "xl"],
      description: "Taille du champ fichier",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "accent", "info", "success", "warning", "error"],
      description: "Couleur du champ fichier",
    },
    ghost: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

const defaultTplStr = `
  <FileInput v-bind="args" />
`;

const FileInputSizesTplStr = `
<div class="flex flex-col gap-4">
  <FileInput size="xs" v-bind="args" />
  <FileInput size="sm" v-bind="args" />
  <FileInput size="md" v-bind="args" />
  <FileInput size="lg" v-bind="args" />
  <FileInput size="xl" v-bind="args" />
</div>`;

const FileInputColorsTplStr = `
<div class="flex flex-col gap-4">
  <FileInput variant="primary" v-bind="args" />
  <FileInput variant="secondary" v-bind="args" />
  <FileInput variant="accent" v-bind="args" />
  <FileInput variant="info" v-bind="args" />
  <FileInput variant="success" v-bind="args" />
  <FileInput variant="warning" v-bind="args" />
  <FileInput variant="error" v-bind="args" />
</div>`;

const GhostFileInputTplStr = `
  <FileInput ghost v-bind="args" />
`;

const DisabledFileInputTplStr = `
  <FileInput disabled v-bind="args" />
`;

// DEFAULT
const TemplateFileInput: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...TemplateFileInput };

// FILE INPUT SIZES
const FileInputSizesTemplate: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: FileInputSizesTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: FileInputSizesTplStr,
        language: "html",
      },
    },
  },
};
export const FileInputSizes = { ...FileInputSizesTemplate };

// FILE INPUT COLORS
const FileInputColorsTemplate: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: FileInputColorsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: FileInputColorsTplStr,
        language: "html",
      },
    },
  },
};
export const FileInputColors = { ...FileInputColorsTemplate };

// GHOST FILE INPUT
const GhostFileInputTemplate: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: GhostFileInputTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: GhostFileInputTplStr,
        language: "html",
      },
    },
  },
};
export const GhostFileInput = { ...GhostFileInputTemplate };

// DISABLED FILE INPUT
const DisabledFileInputTemplate: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: DisabledFileInputTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: DisabledFileInputTplStr,
        language: "html",
      },
    },
  },
};
export const DisabledFileInput = { ...DisabledFileInputTemplate };
