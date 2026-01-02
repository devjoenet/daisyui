import type { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "./avatar.vue";
import { useSizeStoriesControl } from "@/composables/useSizes";
import type { ArgTypes } from "@storybook/vue3";
import { AVATAR_ROUNDED } from "./avatar.types";

const meta: Meta<typeof Avatar> = {
  title: "Components/DataDisplay/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    ...(useSizeStoriesControl as ArgTypes),
    rounded: {
      control: { type: "select" },
      options: ["default", "rounded", "full", "xs", "sm", "md", "lg", "xl"],
      description: "Controls the border radius of the avatar",
    },
    online: {
      control: "boolean",
      description: "Shows online status indicator",
    },
    offline: {
      control: "boolean",
      description: "Shows offline status indicator",
    },
    placeholder: {
      control: "boolean",
      description: "For showing letters as avatar placeholder",
    },
    ring: {
      control: "boolean",
      description: "Adds a ring around the avatar",
    },
    ringColor: {
      control: "text",
      description: "Color of the ring",
      if: { arg: "ring", truthy: true },
    },
    ringOffset: {
      control: "number",
      description: "Size of the ring offset",
      if: { arg: "ring", truthy: true },
    },
    mask: {
      control: { type: "select" },
      options: [undefined, "heart", "squircle", "hexagon", "hexagon-2", "decagon", "pentagon", "diamond", "square", "circle", "parallelogram", "parallelogram-2", "star", "star-2"],
      description: "Applies a mask shape to the avatar",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// Templates for each story
const defaultTplStr = `
  <Avatar size="lg" rounded="rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
`;

const avatarSizesTplStr = `
<div class="flex items-center gap-4">
  <Avatar size="xs" rounded="rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="sm" rounded="rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="md" rounded="rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="xl" rounded="rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
</div>
`;

const avatarRoundedTplStr = `
<div class="flex items-center gap-4">
  <Avatar size="lg" rounded="default">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="lg">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="xl">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
</div>
`;

const avatarWithPresenceTplStr = `
<div class="flex items-center gap-4">
  <Avatar size="lg" rounded="full" online>
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="full" offline>
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
</div>
`;

const avatarWithRingTplStr = `
<div class="flex items-center gap-4">
  <Avatar size="lg" rounded="full" ring ringColor="primary">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="full" ring ringColor="secondary">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" rounded="full" ring ringColor="accent">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
</div>
`;

const avatarWithMaskTplStr = `
<div class="flex items-center gap-4">
  <Avatar size="lg" mask="heart">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" mask="squircle">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="lg" mask="hexagon">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
</div>
`;

const avatarPlaceholderTplStr = `
<div class="flex items-center gap-4">
  <Avatar size="lg" rounded="full" placeholder>
    <span class="text-3xl">AA</span>
  </Avatar>
  <Avatar size="lg" rounded="full" placeholder online>
    <span class="text-3xl">BB</span>
  </Avatar>
  <Avatar size="lg" rounded="full" placeholder offline>
    <span class="text-3xl">CC</span>
  </Avatar>
</div>
`;

const avatarWithIconTplStr = `
<div class="flex items-center gap-4">
  <Avatar size="lg" rounded="full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
    </svg>
  </Avatar>
  <Avatar size="lg" rounded="full" placeholder>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
    </svg>
  </Avatar>
</div>
`;

const avatarGroupTplStr = `
<div class="avatar-group -space-x-4">
  <Avatar size="md" rounded="full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="md" rounded="full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="md" rounded="full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
  </Avatar>
  <Avatar size="md" variant="neutral" rounded="full" placeholder>
    <span>+99</span>
  </Avatar>
</div>
`;

// Stories
export const DefaultAvatar: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `
      <Avatar v-bind="args">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
      </Avatar>
    `,
  }),
  args: {
    size: "lg",
    rounded: "rounded",
  },
  parameters: {
    docs: {
      source: {
        code: defaultTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarSizes: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarSizesTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarSizesTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarRoundedStyles: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarRoundedTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarRoundedTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarWithPresence: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarWithPresenceTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarWithPresenceTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarWithRing: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarWithRingTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarWithRingTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarWithMask: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarWithMaskTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarWithMaskTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarPlaceholder: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarPlaceholderTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarPlaceholderTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarWithIcon: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarWithIconTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarWithIconTplStr,
        language: "html",
      },
    },
  },
};

export const AvatarGroup: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return {};
    },
    template: avatarGroupTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: avatarGroupTplStr,
        language: "html",
      },
    },
  },
};
