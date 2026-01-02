import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "./navbar.vue";
import { ButtonLink } from "../ButtonLink";
import { Button } from "../Button";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navigation/Navbar",
  tags: ["autodocs"],
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => ({
    components: { Navbar, ButtonLink },
    template: `
      <Navbar>
        <template #center>
          <ButtonLink href="/" :ghost="true">daisyUI</ButtonLink>
        </template>
      </Navbar>
    `,
  }),
};

export const WithTitleAndIcon: Story = {
  render: () => ({
    components: { Navbar, ButtonLink, Button },
    template: `
      <Navbar>
        <template #start>
          <ButtonLink href="/" :ghost="true">daisyUI</ButtonLink>
        </template>
        <template #end>
          <Button :ghost="true" :square="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </Button>
        </template>
      </Navbar>
    `,
  }),
};

export const WithIconAtStartAndEnd: Story = {
  render: () => ({
    components: { Navbar, ButtonLink, Button },
    template: `
      <Navbar>
        <template #start>
          <Button :ghost="true" :square="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </template>
        <template #center>
          <ButtonLink href="/" :ghost="true">daisyUI</ButtonLink>
        </template>
        <template #end>
          <Button :ghost="true" :square="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </Button>
        </template>
      </Navbar>
    `,
  }),
};

export const WithMenuAndSubmenu: Story = {
  render: () => ({
    components: { Navbar, ButtonLink },
    template: `
      <Navbar>
        <template #start>
          <ButtonLink class="text-xl" :ghost="true">daisyUI</ButtonLink>
        </template>
        <template #end>
          <ul class="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul class="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </template>
      </Navbar>
    `,
  }),
};

export const WithSearchInput: Story = {
  render: () => ({
    components: { Navbar, Button },
    template: `
      <Navbar>
        <template #start>
          <Button variant="ghost" class="text-xl">daisyUI</Button>
        </template>
        <template #end>
          <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
        </template>
      </Navbar>
    `,
  }),
};
