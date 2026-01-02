import type { Meta, StoryObj } from "@storybook/vue3";
import { Dropdown } from "./Dropdown.vue";
import { Button } from "../Button";
import { Menu } from "../Menu";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Actions/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    hover: { control: "boolean" },
    open: { control: "boolean" },
    placement: {
      control: { type: "select" },
      options: ["start", "center", "end", "top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const defaultTplStr = `
  <Dropdown v-bind="args">
    <template #trigger>
      <Button class="m-1">Click me !</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </Menu>
  </Dropdown>
`;

const placementsTplStr = `
<div class="flex flex-wrap gap-4 justify-center p-16">
  <Dropdown placement="top">
    <template #trigger>
      <Button class="m-1">Top</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown placement="bottom">
    <template #trigger>
      <Button class="m-1">Bottom</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown placement="left">
    <template #trigger>
      <Button class="m-1">Left</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown placement="right">
    <template #trigger>
      <Button class="m-1">Right</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

const alignmentsTplStr = `
<div class="flex flex-wrap gap-4 justify-center p-16">
  <Dropdown placement="start">
    <template #trigger>
      <Button class="m-1">Start</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown placement="center">
    <template #trigger>
      <Button class="m-1">Center</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown placement="end">
    <template #trigger>
      <Button class="m-1">End</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

const hoverTplStr = `
<div class="flex justify-center p-16">
  <Dropdown hover>
    <template #trigger>
      <Button class="m-1">Hover me !</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

const openTplStr = `
<div class="flex justify-center p-16">
  <Dropdown open>
    <template #trigger>
      <Button class="m-1">Always open</Button>
    </template>
    <Menu class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

// DEFAULT DROPDOWN
export const DefaultDropdown: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<Dropdown>
  <template #trigger>
    <Button class="m-1">Click me !</Button>
  </template>
  <Menu class="w-56">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </Menu>
</Dropdown>`,
        language: "html",
        type: "auto",
      },
    },
  },
};

// DROPDOWN PLACEMENTS
export const DropdownPlacements: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return {};
    },
    template: placementsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: placementsTplStr,
        language: "html",
      },
    },
  },
};

// DROPDOWN ALIGNMENTS
export const DropdownAlignments: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return {};
    },
    template: alignmentsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: alignmentsTplStr,
        language: "html",
      },
    },
  },
};

// DROPDOWN HOVER
export const DropdownHover: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return {};
    },
    template: hoverTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: hoverTplStr,
        language: "html",
      },
    },
  },
};

// DROPDOWN OPEN
export const DropdownOpen: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return {};
    },
    template: openTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: openTplStr,
        language: "html",
      },
    },
  },
};

// STORY EXEMPLE
export const DropdownExample: Story = {
  render: () => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return {};
    },
    template: `
      <Dropdown>
        <template #trigger>
          <Button class="m-1">Example</Button>
        </template>
        <Menu class="w-56">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </Menu>
      </Dropdown>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<Dropdown>
  <template #trigger>
    <Button class="m-1">Example</Button>
  </template>
  <Menu class="w-56">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </Menu>
</Dropdown>`,
        language: "html",
      },
    },
  },
};
