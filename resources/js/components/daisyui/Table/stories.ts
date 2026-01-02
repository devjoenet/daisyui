import type { Meta, StoryObj } from "@storybook/vue3";
import Table from "./table.vue";
import TableItem from "./table-item.vue";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { useSizeStoriesControl } from "@/composables/useSizes";
import type { ArgTypes } from "@storybook/vue3";

const meta = {
  title: "Components/DataDisplay/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    ...(() => {
      const { size, ...rest } = useSizeStoriesControl as ArgTypes;
      return rest;
    })(),
    size: {
      control: { type: "select" },
      options: ["default", "xs", "sm", "md", "lg", "xl"],
      description: "Taille du tableau",
    },
    columns: {
      control: "object",
      description: "Array of column definitions with key, label and optional customClass",
    },
    rows: {
      control: "object",
      description: "Array of row data objects with id and values corresponding to column keys",
    },
    zebra: {
      control: "boolean",
      description: "Apply zebra-striping to table rows",
    },
    pinRows: {
      control: "boolean",
      description: "Pin header and footer rows",
    },
    pinCols: {
      control: "boolean",
      description: "Pin first column",
    },
    customClass: {
      control: "text",
      description: "Custom class to apply to the table",
    },
  },
  args: {
    columns: [
      { key: "name", label: "Name" },
      { key: "job", label: "Job" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ],
    rows: [
      {
        id: 1,
        name: "Cy Ganderton",
        job: "Quality Control Specialist",
        status: "active",
      },
      {
        id: 2,
        name: "Hart Hagerty",
        job: "Desktop Support Technician",
        status: "inactive",
      },
      {
        id: 3,
        name: "Brice Swyre",
        job: "Tax Accountant",
        status: "active",
      },
    ],
    zebra: false,
    pinRows: false,
    pinCols: false,
    size: "default",
    customClass: "",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Zebra: Story = {
  args: {
    zebra: true,
  },
};

export const PinnedRows: Story = {
  args: {
    pinRows: true,
  },
  render: (args: any) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: `
                <Table v-bind="args" class="h-28"></Table>
        `,
  }),
};

export const PinnedColumns: Story = {
  args: {
    pinCols: true,
  },
};

export const CompactSize: Story = {
  args: {
    size: "xs",
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
  },
};

export const WithFooter: Story = {
  args: {
    footer: true,
  },
};

const manualModeTplStr = `
<Table zebra size="md">
  <thead>
    <tr>
      <TableItem isHeader>Name</TableItem>
      <TableItem isHeader>Job</TableItem>
      <TableItem isHeader>Status</TableItem>
      <TableItem isHeader>Action</TableItem>
    </tr>
  </thead>
  <tbody>
    <tr>
      <TableItem>Cy Ganderton</TableItem>
      <TableItem>Quality Control Specialist</TableItem>
      <TableItem>
        <Badge variant="success" size="sm">active</Badge>
      </TableItem>
      <TableItem>
        <Button variant="primary" size="xs">View</Button>
      </TableItem>
    </tr>
    <tr>
      <TableItem>Hart Hagerty</TableItem>
      <TableItem>Desktop Support Technician</TableItem>
      <TableItem>
        <Badge variant="error" size="sm">inactive</Badge>
      </TableItem>
      <TableItem>
        <Button variant="primary" size="xs">View</Button>
      </TableItem>
    </tr>
    <tr>
      <TableItem>Brice Swyre</TableItem>
      <TableItem>Tax Accountant</TableItem>
      <TableItem>
        <Badge variant="success" size="sm">active</Badge>
      </TableItem>
      <TableItem>
        <Button variant="primary" size="xs">View</Button>
      </TableItem>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <TableItem colspan="4" customClass="text-right font-bold">
        Total Employees: 3
      </TableItem>
    </tr>
  </tfoot>
</Table>
`;

export const ManualMode: Story = {
  render: (args: any) => ({
    components: { Table, TableItem, Badge, Button },
    setup() {
      return { args };
    },
    template: manualModeTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: manualModeTplStr,
        language: "html",
      },
    },
  },
};

const complexTableTplStr = `
<Table zebra size="sm" customClass="border border-base-300">
  <thead>
    <tr>
      <TableItem isHeader customClass="bg-primary text-primary-content">Product</TableItem>
      <TableItem isHeader customClass="bg-primary text-primary-content">Category</TableItem>
      <TableItem isHeader customClass="bg-primary text-primary-content">Price</TableItem>
      <TableItem isHeader customClass="bg-primary text-primary-content">Stock</TableItem>
    </tr>
  </thead>
  <tbody>
    <tr>
      <TableItem>Smartphone XYZ</TableItem>
      <TableItem>Electronics</TableItem>
      <TableItem>$599</TableItem>
      <TableItem>
        <Badge variant="success" size="sm">In stock</Badge>
      </TableItem>
    </tr>
    <tr>
      <TableItem>Laptop ABC</TableItem>
      <TableItem>Electronics</TableItem>
      <TableItem>$1299</TableItem>
      <TableItem>
        <Badge variant="warning" size="sm">Limited stock</Badge>
      </TableItem>
    </tr>
    <tr>
      <TableItem>Headphones DEF</TableItem>
      <TableItem>Accessories</TableItem>
      <TableItem>$199</TableItem>
      <TableItem>
        <Badge variant="error" size="sm">Out of stock</Badge>
      </TableItem>
    </tr>
    <tr>
      <TableItem>Smartwatch GHI</TableItem>
      <TableItem>Accessories</TableItem>
      <TableItem>$299</TableItem>
      <TableItem>
        <Badge variant="success" size="sm">In stock</Badge>
      </TableItem>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <TableItem colspan="4" customClass="text-right">
        <div class="flex justify-between">
          <span>Updated: 06/01/2023</span>
          <span class="font-bold">Total products: 4</span>
        </div>
      </TableItem>
    </tr>
  </tfoot>
</Table>
`;

export const ComplexTable: Story = {
  render: (args: any) => ({
    components: { Table, TableItem, Badge },
    setup() {
      return { args };
    },
    template: complexTableTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: complexTableTplStr,
        language: "html",
      },
    },
  },
};
