import type { Meta, StoryObj } from "@storybook/vue3";
import Select from "./Select.vue";
import { useVariantStoriesControl } from "@/composables/useVariants";
import { useSizeStoriesControl } from "@/composables/useSizes";
import type { ArgTypes } from "@storybook/vue3";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
      description: "Taille du select",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "accent", "info", "success", "warning", "error"],
      description: "Couleur du select",
    },
    multiple: { control: "boolean", description: "Sélection multiple" },
    searchable: { control: "boolean", description: "Recherche activée" },
    searchableInside: { control: "boolean", description: "Recherche à l'intérieur du dropdown" },
    ghost: { control: "boolean", description: "Style fantôme" },
    disabled: { control: "boolean", description: "Désactivé" },
    checkboxes: { control: "boolean", description: "Afficher des checkboxes" },
    placeholder: { control: "text", description: "Texte de placeholder" },
    searchPlaceholder: { control: "text", description: "Placeholder de la recherche" },
    returnObject: { control: "boolean", description: "Retourner l'objet complet" },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { id: 1, name: "Option 1", category: "Groupe A" },
  { id: 2, name: "Option 2", category: "Groupe A" },
  { id: 3, name: "Option 3", category: "Groupe B" },
  { id: 4, name: "Option très longue qui peut déborder", category: "Groupe B" },
  { id: 5, name: "Option 5", category: "Groupe C" },
];

const simpleOptions = ["Pomme", "Banane", "Orange", "Fraise", "Ananas"];

const defaultTplStr = `
  <Select v-bind="args" />
`;

export const Default: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {
    options: sampleOptions,
    placeholder: "Choisissez une option...",
  },
};

export const Simple: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {
    options: simpleOptions,
    placeholder: "Choisissez un fruit...",
    trackBy: "",
    labelBy: "",
  },
};

export const Multiple: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {
    options: sampleOptions,
    multiple: true,
    placeholder: "Sélectionnez plusieurs options...",
  },
};

export const Searchable: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {
    options: sampleOptions,
    searchable: true,
    placeholder: "Recherchez et sélectionnez...",
  },
};

export const WithCheckboxes: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {
    options: sampleOptions,
    multiple: true,
    checkboxes: true,
    placeholder: "Sélectionnez avec des checkboxes...",
  },
};

export const Sizes: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <Select size="xs" v-bind="args" placeholder="Extra Small" />
        <Select size="sm" v-bind="args" placeholder="Small" />
        <Select size="md" v-bind="args" placeholder="Medium" />
        <Select size="lg" v-bind="args" placeholder="Large" />
        <Select size="xl" v-bind="args" placeholder="Extra Large" />
      </div>
    `,
  }),
  args: {
    options: sampleOptions,
  },
};

export const Variants: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <Select variant="default" v-bind="args" placeholder="Default" />
        <Select variant="primary" v-bind="args" placeholder="Primary" />
        <Select variant="secondary" v-bind="args" placeholder="Secondary" />
        <Select variant="accent" v-bind="args" placeholder="Accent" />
        <Select variant="info" v-bind="args" placeholder="Info" />
        <Select variant="success" v-bind="args" placeholder="Success" />
        <Select variant="warning" v-bind="args" placeholder="Warning" />
        <Select variant="error" v-bind="args" placeholder="Error" />
      </div>
    `,
  }),
  args: {
    options: sampleOptions,
  },
};

export const Ghost: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {
    options: sampleOptions,
    ghost: true,
    placeholder: "Select ghost style...",
  },
};

export const Disabled: Story = {
  render: (args: any) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: "Disabled select...",
  },
};
