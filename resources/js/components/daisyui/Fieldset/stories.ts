import type { Meta, StoryObj } from "@storybook/vue3";
import Fieldset from "./Fieldset.vue";
import { InputField } from "../InputField";
import { Label } from "../Label";
import { Button } from "../Button";

const meta: Meta<typeof Fieldset> = {
  title: "Components/DataInput/Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
  argTypes: {
    legend: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

const defaultTplStr = `
<Fieldset legend="Page title" label="You can edit page title later on from settings" v-bind="args">
  <InputField placeholder="Type here" />
</Fieldset>
`;

const FieldsetWithBackgroundAndBorderTplStr = `
<Fieldset 
  legend="Page title" 
  label="You can edit page title later on from settings" 
  v-bind="args" 
  class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <InputField placeholder="Type here" />
</Fieldset>
`;

const FieldsetWithMultipleInputsTplStr = `
<Fieldset 
  legend="Page details" 
  v-bind="args"
  class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <Label type="fieldset-label">Title</Label>
  <InputField placeholder="My awesome page" />
  <Label type="fieldset-label">Slug</Label>
  <InputField placeholder="my-awesome-page" />
  <Label type="fieldset-label">Author</Label>
  <InputField placeholder="Name" />
</Fieldset>
`;

const LoginFormTplStr = `
<Fieldset 
  legend="Login" 
  v-bind="args"
  class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <Label type="fieldset-label">Email</Label>
  <InputField placeholder="Email" />
  <Label type="fieldset-label">Password</Label>
  <InputField placeholder="Password" />
  <Button variant="neutral" class="mt-4">Login</Button>
</Fieldset>
`;

// DEFAULT

const DefaultLabelTemplate: Story = {
  render: (args: any) => ({
    components: { Fieldset, InputField },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const DefaultLabel = { ...DefaultLabelTemplate };

// FIELDSET WITH BACKGROUND AND BORDER

const FieldsetWithBackgroundAndBorderTemplate: Story = {
  render: (args: any) => ({
    components: { Fieldset, InputField },
    setup() {
      return { args };
    },
    template: FieldsetWithBackgroundAndBorderTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: FieldsetWithBackgroundAndBorderTplStr,
        language: "html",
      },
    },
  },
};
export const FieldsetWithBackgroundAndBorder = {
  ...FieldsetWithBackgroundAndBorderTemplate,
};
FieldsetWithBackgroundAndBorder.args = {};

// FIELDSET WITH MULTIPLE INPUTS

const FieldsetWithMultipleInputsTemplate: Story = {
  render: (args: any) => ({
    components: { Fieldset, InputField, Label },
    setup() {
      return { args };
    },
    template: FieldsetWithMultipleInputsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: FieldsetWithMultipleInputsTplStr,
        language: "html",
      },
    },
  },
};
export const FieldsetWithMultipleInputs = {
  ...FieldsetWithMultipleInputsTemplate,
};
FieldsetWithMultipleInputs.args = {};

// LOGIN FORM

const LoginFormTemplate: Story = {
  render: (args: any) => ({
    components: { Fieldset, InputField, Button },
    setup() {
      return { args };
    },
    template: LoginFormTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: LoginFormTplStr,
        language: "html",
      },
    },
  },
};
export const LoginForm = { ...LoginFormTemplate };
LoginForm.args = {};
