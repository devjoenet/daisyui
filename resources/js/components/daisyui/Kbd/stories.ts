import type { Meta, StoryObj } from "@storybook/vue3";
import Kbd from "./Kbd.vue";
import { useSizeStoriesControl } from "../../composables/useSizes";
import type { ArgTypes } from "@storybook/vue3";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  argTypes: {
    ...(useSizeStoriesControl as ArgTypes),
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

const defaultTplStr = `
  <Kbd v-bind="args">K</Kbd>
`;
const KbdSizesTplStr = `
<div class="flex gap-2 items-center">
  <Kbd size="xs">XSmall</Kbd>
  <Kbd size="sm">Small</Kbd>
  <Kbd size="md">Medium</Kbd>
  <Kbd size="lg">Large</Kbd>
  <Kbd size="xl">XLarge</Kbd>
</div>`;
const InTextKbdTplStr = `
<div class="flex gap-2 items-center">
  <p>
    Press <Kbd>F</Kbd> to pay respects.
  </p>
</div>
`;
const KeyCombinationsTplStr = `
<div>
  <Kbd>ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>del</Kbd>
</div>
`;
const FunctionKeysTplStr = `
<div class="flex gap-2 m-4">
  <Kbd>⌘</Kbd>
  <Kbd>⌥</Kbd>
  <Kbd>⇧</Kbd>
  <Kbd>⌃</Kbd>
</div>
`;
const FullKeyboardTplStr = `
<div class="my-1 flex w-full justify-center gap-1">
  <Kbd>q</Kbd>
  <Kbd>w</Kbd>
  <Kbd>e</Kbd>
  <Kbd>r</Kbd>
  <Kbd>t</Kbd>
  <Kbd>y</Kbd>
  <Kbd>u</Kbd>
  <Kbd>i</Kbd>
  <Kbd>o</Kbd>
  <Kbd>p</Kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <Kbd>a</Kbd>
  <Kbd>s</Kbd>
  <Kbd>d</Kbd>
  <Kbd>f</Kbd>
  <Kbd>g</Kbd>
  <Kbd>h</Kbd>
  <Kbd>j</Kbd>
  <Kbd>k</Kbd>
  <Kbd>l</Kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <Kbd>z</Kbd>
  <Kbd>x</Kbd>
  <Kbd>c</Kbd>
  <Kbd>v</Kbd>
  <Kbd>b</Kbd>
  <Kbd>n</Kbd>
  <Kbd>m</Kbd>
  <Kbd>/</Kbd>
</div>
`;
const ArrowKeysTplStr = `
<div class="flex w-full justify-center">
  <Kbd>▲</Kbd>
</div>
<div class="flex w-full justify-center gap-12">
  <Kbd>◀︎</Kbd>
  <Kbd>▶︎</Kbd>
</div>
<div class="flex w-full justify-center">
  <Kbd>▼</Kbd>
</div>
`;

// DEFAULT

const DefaultTemplate: Story = {
  render: (args: any) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...DefaultTemplate };
Default.args = {};

// KBD SIZES

const KbdSizesTemplate: Story = {
  render: (args: any) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: KbdSizesTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: KbdSizesTplStr,
        language: "html",
      },
    },
  },
};
export const KbdSizes = { ...KbdSizesTemplate };
KbdSizes.args = {};

// IN TEXT KBD

const InTextKbdTemplate: Story = {
  render: (args: any) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: InTextKbdTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: InTextKbdTplStr,
        language: "html",
      },
    },
  },
};
export const InTextKbd = { ...InTextKbdTemplate };
InTextKbd.args = {};

// KEY COMBINATIONS

const KeyCombinationsTemplate: Story = {
  render: (args: any) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: KeyCombinationsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: KeyCombinationsTplStr,
        language: "html",
      },
    },
  },
};
export const KeyCombinations = { ...KeyCombinationsTemplate };
KeyCombinations.args = {};

// FUNCTION KEYS

const FunctionKeysTemplate: Story = {
  render: (args: any) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: FunctionKeysTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: FunctionKeysTplStr,
        language: "html",
      },
    },
  },
};
export const FunctionKeys = { ...FunctionKeysTemplate };
FunctionKeys.args = {};

// FULL KEYBOARD

const FullKeyboardTemplate: Story = {
  render: (args: any) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: FullKeyboardTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: FullKeyboardTplStr,
        language: "html",
      },
    },
  },
};
export const FullKeyboard = { ...FullKeyboardTemplate };
FullKeyboard.args = {};

// ARROW KEYS

const ArrowKeysTemplate: Story = {
  render: (args: any) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: ArrowKeysTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: ArrowKeysTplStr,
        language: "html",
      },
    },
  },
};
export const ArrowKeys = { ...ArrowKeysTemplate };
ArrowKeys.args = {};
