import type { Meta, StoryObj } from "@storybook/vue3";
import Radio from "./Radio.vue";
import { useVariantStoriesControl } from "../../composables/useVariants";
import { useSizeStoriesControl } from "../../composables/useSizes";
import type { ArgTypes } from "@storybook/vue3";

const meta: Meta<typeof Radio> = {
  title: "Components/DataInput/Radio",
  component: Radio,
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
      description: "Taille du radio",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "accent", "info", "success", "warning", "error"],
      description: "Couleur du radio",
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

const defaultTplStr = `
  <Radio v-bind="args" />
`;

const RadioColorsTplStr = `
<div class="flex flex-col gap-4">
  <label class="flex items-center gap-2">
    <Radio variant="primary" name="radio" /> 
    <span>Primary</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="secondary" name="radio" />
    <span>Secondary</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="accent" name="radio" />
    <span>Accent</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="info" name="radio" />
    <span>Info</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="success" name="radio" />
    <span>Success</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="warning" name="radio" />
    <span>Warning</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="error" name="radio" />
    <span>Error</span>
  </label>
</div>`;

const RadioSizesTplStr = `
<div class="flex items-center gap-4">
  <div class="flex items-center gap-2">
    <Radio size="xs" />
    <span>XS</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio size="sm" />
    <span>SM</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio size="md" />
    <span>MD</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio size="lg" />
    <span>LG</span>
  </div>
</div>`;

const RadioStatesTplStr = `
<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <Radio checked />
    <span>Checked</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio />
    <span>Unchecked</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio disabled />
    <span>Disabled</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio checked disabled />
    <span>Checked & Disabled</span>
  </div>
</div>`;

const RadioGroupTplStr = `
<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <Radio name="radio-group" checked />
    <span>Option 1</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio name="radio-group" />
    <span>Option 2</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio name="radio-group" />
    <span>Option 3</span>
  </div>
</div>`;

const TemplateRadio: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...TemplateRadio };

const RadioColorsTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioColorsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: RadioColorsTplStr,
        language: "html",
      },
    },
  },
};
export const RadioColors = { ...RadioColorsTemplate };

const RadioSizesTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioSizesTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: RadioSizesTplStr,
        language: "html",
      },
    },
  },
};
export const RadioSizes = { ...RadioSizesTemplate };

const RadioStatesTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioStatesTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: RadioStatesTplStr,
        language: "html",
      },
    },
  },
};
export const RadioStates = { ...RadioStatesTemplate };

const RadioGroupTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioGroupTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: RadioGroupTplStr,
        language: "html",
      },
    },
  },
};
export const RadioGroup = { ...RadioGroupTemplate };
