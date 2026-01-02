import type { Meta, StoryObj } from "@storybook/vue3";
import Drawer from "./Drawer.vue";
import { Button } from "../Button";
import { Navbar } from "../Navbar";
import { Menu } from "../Menu";
import { ref } from "vue";

const meta: Meta<typeof Drawer> = {
  title: "Components/Layout/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    position: {
      control: { type: "select" },
      options: ["start", "end"],
    },
    open: { control: "boolean" },
    responsive: { control: "boolean" },
    alwaysOpenOnLarge: { control: "boolean" },
    sidebarClass: { control: "text" },
    contentClass: { control: "text" },
    overlayClass: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const basicTplStr = `
<Drawer v-bind="args">
  <template #content>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <Button as="label" for="my-drawer" variant="primary">
        Open drawer
      </Button>
      <p class="mt-4">Page content here</p>
    </div>
  </template>
  
  <template #sidebar>
    <Menu class="w-full">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 3</a></li>
    </Menu>
  </template>
</Drawer>
`;

const basicSetupStr = `
<script setup>
// No setup needed for basic usage
</script>
`;

const withItemsTplStr = `
<Drawer :items="items" id="my-drawer-items">
  <template #content>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <Button as="label" for="my-drawer-items" variant="primary">
        Open drawer with items
      </Button>
    </div>
  </template>
</Drawer>
`;

const withItemsTplStrAndCustomMenu = `
<Drawer :items="items" id="my-drawer-items-icons">
  <!-- See /docs/components-navigation-menu for custom item examples -->
  <template #item="{ item, index }">
    <li :class="{ 'menu-disabled': item.disabled }">
      <a :href="item.href" class="flex items-center gap-2">
        <span v-if="item.icon" class="w-5 h-5">
          <component :is="item.icon" class="w-5 h-5" />
        </span>
        <span v-else class="w-2 h-2 bg-success rounded-full"></span>
        {{ item.label }} test
      </a>
    </li>
  </template>
  <template #content>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <Button as="label" for="my-drawer-items-icons" variant="primary">
        Open drawer with items
      </Button>
    </div>
  </template>
</Drawer>
`;

const withItemsSetupStr = `
<script setup>
const items = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]
</script>
`;

const drawerEndTplStr = `
<Drawer position="end" id="my-drawer-end">
  <template #content>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <Button as="label" for="my-drawer-end" variant="primary">
        Open drawer from right
      </Button>
    </div>
  </template>
  
  <template #sidebar>
    <Menu class="w-full">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 3</a></li>
    </Menu>
  </template>
</Drawer>
`;

const drawerEndSetupStr = `
<script setup>
// Drawer opens from the right side with position="end"
</script>
`;

const alwaysOpenTplStr = `
<Drawer alwaysOpenOnLarge id="my-drawer-open">
  <template #content>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <Button as="label" for="my-drawer-open" variant="primary" customClass="lg:hidden">
        Open drawer
      </Button>
      <p class="mt-4">Sidebar is always visible on large screens</p>
    </div>
  </template>
  
  <template #sidebar>
    <Menu class="w-full">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 3</a></li>
    </Menu>
  </template>
</Drawer>
`;

const alwaysOpenSetupStr = `
<script setup>
// Sidebar is always visible on large screens (lg breakpoint)
// Can be toggled on small screens
</script>
`;

const withNavbarTplStr = `
<Drawer id="my-drawer-navbar">
  <template #content>
    <div class="flex flex-col min-h-screen">
      <!-- Navbar -->
      <Navbar>
        <template #start>
          <div class="flex-none lg:hidden">
            <Button as="label" for="my-drawer-navbar" aria-label="open sidebar" variant="ghost" square>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
          <div class="flex-1 px-2 mx-2">Navbar Title</div>
        </template>
        <template #end>
          <div class="flex-none hidden lg:block">
            <Menu class="w-full" direction="horizontal">
              <li><a>Navbar Item 1</a></li>
              <li><a>Navbar Item 2</a></li>
            </Menu>
          </div>
        </template>
      </Navbar>
      
      <!-- Page Content -->
      <div class="flex justify-center items-center grow">
        <p>Content</p>
      </div>
    </div>
  </template>
  
  <template #sidebar>
    <Menu class="w-full">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 3</a></li>
    </Menu>
  </template>
</Drawer>
`;

const withNavbarSetupStr = `
<script setup>
import Navbar from '../../Navigation/navbar/navbar.vue'
import Menu from '../../Navigation/menu/menu.vue'
// Navbar with drawer for mobile, menu for desktop
</script>
`;

const controlledTplStr = `
<div>
  <Button @click="isOpen = !isOpen">
    {{ isOpen ? 'Close' : 'Open' }} Drawer
  </Button>
  
  <Drawer v-model="isOpen" id="my-drawer-controlled">
    <template #content>
      <div class="flex flex-col items-center justify-center min-h-screen">
        <p>Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
        <Button @click="isOpen = !isOpen" customClass="mt-4">
          Toggle Drawer
        </Button>
      </div>
    </template>
    
    <template #sidebar>
      <Menu class="w-full">
        <li><a @click="isOpen = false">Close drawer</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 3</a></li>
      </Menu>
    </template>
  </Drawer>
</div>
`;

const controlledSetupStr = `
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
`;

const customClassesTplStr = `
<Drawer 
  id="my-drawer-custom"
  sidebarClass="bg-primary text-primary-content"
  contentClass="bg-base-300"
>
  <template #content>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <Button as="label" for="my-drawer-custom" variant="primary">
        Open custom drawer
      </Button>
    </div>
  </template>
  
  <template #sidebar>
    <Menu class="w-full">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 3</a></li>
    </Menu>
  </template>
</Drawer>
`;

const customClassesSetupStr = `
<script setup>
// Custom classes for sidebar and content
</script>
`;

export const Basic: Story = {
  args: {
    id: "my-drawer",
  },
  render: (args) => ({
    components: { Drawer, Button, Menu },
    setup() {
      return { args };
    },
    template: basicTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: basicSetupStr + "\n\n" + basicTplStr,
      },
    },
  },
};

export const WithItems: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      return { args, items: args.items };
    },
    template: withItemsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: withItemsSetupStr + "\n\n" + withItemsTplStr,
      },
    },
  },
};

export const WithItemsAndCustomMenu: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      return { args, items: args.items };
    },
    template: withItemsTplStrAndCustomMenu,
  }),
  parameters: {
    docs: {
      source: {
        code: withItemsSetupStr + "\n\n" + withItemsTplStrAndCustomMenu,
      },
    },
  },
};

export const DrawerEnd: Story = {
  args: {
    position: "end",
  },
  render: (args) => ({
    components: { Drawer, Button, Menu },
    setup() {
      return { args };
    },
    template: drawerEndTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: drawerEndSetupStr + "\n\n" + drawerEndTplStr,
      },
    },
  },
};

export const AlwaysOpenOnLarge: Story = {
  args: {
    alwaysOpenOnLarge: true,
  },
  render: (args) => ({
    components: { Drawer, Button, Menu },
    setup() {
      return { args };
    },
    template: alwaysOpenTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: alwaysOpenSetupStr + "\n\n" + alwaysOpenTplStr,
      },
    },
  },
};

export const WithNavbar: Story = {
  args: {},
  render: (args) => ({
    components: { Drawer, Navbar, Button, Menu },
    setup() {
      return { args };
    },
    template: withNavbarTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: withNavbarSetupStr + "\n\n" + withNavbarTplStr,
      },
    },
  },
};

export const Controlled: Story = {
  args: {},
  render: (args) => ({
    components: { Drawer, Button, Menu },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: controlledTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: controlledSetupStr + "\n\n" + controlledTplStr,
      },
    },
  },
};

export const CustomClasses: Story = {
  args: {
    sidebarClass: "bg-primary text-primary-content",
    contentClass: "bg-base-300",
  },
  render: (args) => ({
    components: { Drawer, Button, Menu },
    setup() {
      return { args };
    },
    template: customClassesTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: customClassesSetupStr + "\n\n" + customClassesTplStr,
      },
    },
  },
};
