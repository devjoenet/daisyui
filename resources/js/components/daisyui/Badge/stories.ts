import type { ArgTypes, Meta, StoryObj } from "@storybook/vue3";
import Badge from "./badge.vue";
import { useSizeStoriesControl } from "@/composables/useSizes";
import { useVariantStoriesControl } from "@/composables/useVariants";

const meta: Meta<typeof Badge> = {
  title: "Components/DataDisplay/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    ...(useVariantStoriesControl as ArgTypes),
    ...(useSizeStoriesControl as ArgTypes),
    soft: {
      control: "boolean",
      description: "Applies a soft color style to the badge",
    },
    outline: {
      control: "boolean",
      description: "Adds an outline style to the badge",
    },
    dash: {
      control: "boolean",
      description: "Adds a dashed style to the badge",
    },
    ghost: {
      control: "boolean",
      description: "Makes the badge more subtle",
    },
    icon: {
      control: "boolean",
      description: "Adds an icon to the badge based on the variant",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

const defaultTplStr = `
<Badge>Badge</Badge>
`;

const badgeSizesTplStr = `
<div class="flex gap-2 items-center">
  <Badge size="xs">Xsmall</Badge>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
  <Badge size="xl">Xlarge</Badge>
</div>
`;

const badgeColorsTplStr = `
<div class="flex gap-2 items-center">
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="accent">Accent</Badge>
  <Badge variant="neutral">Neutral</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>
</div>
`;

const badgeSoftTplStr = `
<div class="flex gap-2 items-center">
  <Badge variant="primary" soft>Primary</Badge>
  <Badge variant="secondary" soft>Secondary</Badge>
  <Badge variant="accent" soft>Accent</Badge>
  <Badge variant="neutral" soft>Neutral</Badge>
  <Badge variant="info" soft>Info</Badge>
  <Badge variant="success" soft>Success</Badge>
  <Badge variant="warning" soft>Warning</Badge>
  <Badge variant="error" soft>Error</Badge>
</div>
`;

const badgeOutlineTplStr = `
<div class="flex gap-2 items-center">
  <Badge variant="primary" outline>Primary</Badge>
  <Badge variant="secondary" outline>Secondary</Badge>
  <Badge variant="accent" outline>Accent</Badge>
  <Badge variant="neutral" outline>Neutral</Badge>
  <Badge variant="info" outline>Info</Badge>
  <Badge variant="success" outline>Success</Badge>
  <Badge variant="warning" outline>Warning</Badge>
  <Badge variant="error" outline>Error</Badge>
</div>
`;

const badgeDashTplStr = `
<div class="flex gap-2 items-center">
  <Badge variant="primary" dash>Primary</Badge>
  <Badge variant="secondary" dash>Secondary</Badge>
  <Badge variant="accent" dash>Accent</Badge>
  <Badge variant="neutral" dash>Neutral</Badge>
  <Badge variant="info" dash>Info</Badge>
  <Badge variant="success" dash>Success</Badge>
  <Badge variant="warning" dash>Warning</Badge>
  <Badge variant="error" dash>Error</Badge>
</div>
`;

const badgeGhostTplStr = `
<Badge ghost>Ghost Badge</Badge>
`;

const emptyBadgeTplStr = `
<div class="flex gap-2 items-center">
  <Badge size="lg" variant="primary"></Badge>
  <Badge size="md" variant="primary"></Badge>
  <Badge size="sm" variant="primary"></Badge>
  <Badge size="xs" variant="primary"></Badge>
</div>
`;

const badgeWithIconTplStr = `
<div class="flex gap-2 items-center">
  <Badge variant="info" icon>Info</Badge>
  <Badge variant="success" icon>Success</Badge>
  <Badge variant="warning" icon>Warning</Badge>
  <Badge variant="error" icon>Error</Badge>
</div>
`;

const badgeInTextTplStr = `
<div class="flex flex-col gap-2">
  <h1 class="text-xl font-semibold">
    Heading 1 <Badge size="xl">Badge</Badge>
  </h1>
  <h2 class="text-lg font-semibold">
    Heading 2 <Badge size="lg">Badge</Badge>
  </h2>
  <h3 class="text-base font-semibold">
    Heading 3 <Badge size="md">Badge</Badge>
  </h3>
  <h4 class="text-sm font-semibold">
    Heading 4 <Badge size="sm">Badge</Badge>
  </h4>
  <h5 class="text-xs font-semibold">
    Heading 5 <Badge size="xs">Badge</Badge>
  </h5>
  <p class="text-xs">
    Paragraph <Badge size="xs">Badge</Badge>
  </p>
</div>
`;

const badgeInButtonTplStr = `
<div class="flex justify-center gap-2">
  <button class="btn">
    Inbox <Badge size="sm">+99</Badge>
  </button>
  <button class="btn">
    Inbox <Badge size="sm" variant="secondary">+99</Badge>
  </button>
</div>
`;

// Stories
export const DefaultBadge: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Badge</Badge>`,
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

export const BadgeSizes: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeSizesTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeSizesTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeColors: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeColorsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeColorsTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeWithSoftStyle: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeSoftTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeSoftTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeWithOutlineStyle: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeOutlineTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeOutlineTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeWithDashStyle: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeDashTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeDashTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeGhost: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeGhostTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeGhostTplStr,
        language: "html",
      },
    },
  },
};

export const EmptyBadge: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: emptyBadgeTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: emptyBadgeTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeWithIcon: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeWithIconTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeWithIconTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeInText: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeInTextTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeInTextTplStr,
        language: "html",
      },
    },
  },
};

export const BadgeInButton: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return {};
    },
    template: badgeInButtonTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: badgeInButtonTplStr,
        language: "html",
      },
    },
  },
};
