import type { Meta, StoryObj } from "@storybook/vue3";
import Swap from "./Swap.vue";

const meta = {
  title: "Components/Actions/Swap",
  component: Swap,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "Controls the active state of the swap component",
    },
    rotate: {
      control: "boolean",
      description: "Adds a rotate animation",
    },
    flip: {
      control: "boolean",
      description: "Adds a flip animation",
    },
    useCheckbox: {
      control: "boolean",
      description: "Use checkbox to control the swap state",
    },
  },
  args: {
    modelValue: false,
    rotate: false,
    flip: false,
    useCheckbox: true,
  },
} satisfies Meta<typeof Swap>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTplStr = `
<Swap v-bind="args" v-model="args.modelValue" class="text-4xl">
  <template #on>ON</template>
  <template #off>OFF</template>
</Swap>
`;

const rotateTplStr = `
<Swap rotate class="text-4xl">
  <template #on>🌞</template>
  <template #off>🌜</template>
</Swap>
`;

const flipTplStr = `
<Swap flip class="text-4xl">
  <template #on>🥞</template>
  <template #off>🍔</template>
</Swap>
`;

const classNameTplStr = `
<Swap class="text-5xl">
  <template #on>😈</template>
  <template #off>😇</template>
</Swap>
`;

const indeterminateTplStr = `
<Swap useCheckbox class="text-4xl">
  <template #on>ON</template>
  <template #off>OFF</template>
  <template #indeterminate>INDETERMINATE</template>
</Swap>
`;

// DEFAULT SWAP
export const Default: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: defaultTplStr,
        language: "html",
      },
    },
  },
};

// SWAP WITH ROTATE
export const WithRotate: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: rotateTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: rotateTplStr,
        language: "html",
      },
    },
  },
};

// SWAP WITH FLIP
export const WithFlip: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: flipTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: flipTplStr,
        language: "html",
      },
    },
  },
};

// SWAP WITH CLASS NAME
export const WithClassName: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: classNameTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: classNameTplStr,
        language: "html",
      },
    },
  },
};

// SWAP WITH INDETERMINATE STATE
export const WithIndeterminate: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: indeterminateTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: indeterminateTplStr,
        language: "html",
      },
    },
  },
};
