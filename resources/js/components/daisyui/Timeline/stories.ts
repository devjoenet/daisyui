import type { Meta, StoryObj } from "@storybook/vue3";
import Timeline from "./Timeline.vue";
import TimelineItem from "./timeline-item.vue";
import { Button } from "../Button";

const meta = {
  title: "Components/DataDisplay/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of timeline items with start, middle, and end properties",
    },
    direction: {
      control: { type: "select" },
      options: ["timeline-vertical", "timeline-horizontal"],
      description: "Direction of the timeline (vertical or horizontal)",
    },
    modifier: {
      control: { type: "select" },
      options: [undefined, "timeline-snap-icon", "timeline-box", "timeline-compact"],
      description: "Optional modifier class for the timeline",
    },
    customClass: {
      control: "text",
      description: "Custom class to apply to the timeline element",
    },
    responsive: {
      control: "boolean",
      description: "Whether the timeline should be responsive (vertical on mobile, horizontal on large screens)",
    },
    validItems: {
      control: "object",
      description: "Array of boolean values indicating whether each item is valid",
    },
    hrClasses: {
      control: "object",
      description: "Array of CSS classes to apply to hr elements between items",
    },
  },
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
      {
        start: "2007",
        end: "iPhone",
      },
      {
        start: "2015",
        end: "Apple Watch",
      },
    ],
    direction: "timeline-vertical",
    modifier: undefined,
    customClass: "",
    responsive: false,
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    direction: "timeline-horizontal",
    items: [
      {
        start: "1984",
        end: "First Macintosh",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
    ],
  },
};

export const WithSnapIcon: Story = {
  args: {
    modifier: "timeline-snap-icon",
  },
};

export const WithBox: Story = {
  args: {
    modifier: "timeline-box",
  },
};

export const Compact: Story = {
  args: {
    modifier: "timeline-compact",
  },
};

export const Responsive: Story = {
  args: {
    responsive: true,
    items: [
      {
        start: "1984",
        end: "First Macintosh",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
    ],
  },
};

export const WithValidItems: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
        valid: true,
      },
      {
        start: "1998",
        end: "iMac",
        valid: true,
      },
      {
        start: "2001",
        end: "iPod",
        valid: false,
      },
      {
        start: "2007",
        end: "iPhone",
      },
    ],
  },
};

export const WithValidItemsArray: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
      {
        start: "2007",
        end: "iPhone",
      },
    ],
    validItems: [true, true, false, undefined],
  },
};

export const WithCustomHrClasses: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
      {
        start: "2007",
        end: "iPhone",
      },
    ],
    hrClasses: ["bg-primary", "bg-secondary", "bg-accent"],
  },
};

export const WithItemHrClasses: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
        hrClass: "bg-primary",
      },
      {
        start: "1998",
        end: "iMac",
        hrClass: "bg-secondary",
      },
      {
        start: "2001",
        end: "iPod",
        hrClass: "bg-accent",
      },
      {
        start: "2007",
        end: "iPhone",
        hrClass: "bg-error",
      },
    ],
  },
};

const withCustomMiddleTplStr = `
<script setup lang="ts">
const items = [
  {
    start: '1984',
    middle: '🍎',
    end: 'First Macintosh computer',
  },
  {
    start: '1998',
    middle: '🖥️',
    end: 'iMac',
  },
  {
    start: '2001',
    middle: '🎵',
    end: 'iPod',
  },
  {
    start: '2007',
    middle: '📱',
    end: 'iPhone',
  },
]
</script>
<Timeline :items="items" />
`;

export const WithCustomMiddle: Story = {
  render: (args: any) => ({
    components: { Timeline },
    setup() {
      const items = [
        {
          start: "1984",
          middle: "🍎",
          end: "First Macintosh computer",
        },
        {
          start: "1998",
          middle: "🖥️",
          end: "iMac",
        },
        {
          start: "2001",
          middle: "🎵",
          end: "iPod",
        },
        {
          start: "2007",
          middle: "📱",
          end: "iPhone",
        },
      ];
      return { items };
    },
    template: `<Timeline :items="items" />`,
  }),
  parameters: {
    docs: {
      source: {
        code: withCustomMiddleTplStr,
        language: "html",
      },
    },
  },
};

const withSlotsTplStr = `
<script setup lang="ts">
import Button from '../../Actions/button/button.vue'
const items = [
  {
    start: '1984',
    end: 'First Macintosh computer',
  },
  {
    start: '1998',
    end: 'iMac',
  },
  {
    start: '2001',
    end: 'iPod',
  },
]
</script>
<Timeline :items="items">
  <template #middle-1="{ item }">
    <span class="text-2xl">💻</span>
  </template>
  <template #end-1="{ item }">
    <div>
      <h3 class="font-bold">{{ item.end }}</h3>
      <p>The iMac was a revolutionary all-in-one computer.</p>
      <Button variant="primary" size="xs" class="mt-2">Learn More</Button>
    </div>
  </template>
</Timeline>
`;

export const WithSlots: Story = {
  render: (args: any) => ({
    components: { Timeline, Button },
    setup() {
      const items = [
        {
          start: "1984",
          end: "First Macintosh computer",
        },
        {
          start: "1998",
          end: "iMac",
        },
        {
          start: "2001",
          end: "iPod",
        },
      ];
      return { items };
    },
    template: `
      <Timeline :items="items">
        <template #middle-1="{ item }">
          <span class="text-2xl">💻</span>
        </template>
        <template #end-1="{ item }">
          <div>
            <h3 class="font-bold">{{ item.end }}</h3>
            <p>The iMac was a revolutionary all-in-one computer.</p>
            <Button variant="primary" size="xs" class="mt-2">Learn More</Button>
          </div>
        </template>
      </Timeline>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: withSlotsTplStr,
        language: "html",
      },
    },
  },
};

const manualModeTplStr = `
<script setup lang="ts">
import Button from '../../Actions/button/button.vue'
import TimelineItem from './timeline-item.vue'
</script>
<Timeline modifier="timeline-box">
  <TimelineItem start="1984" end="First Macintosh">
    <template #middle>
      <span class="text-xl">🍎</span>
    </template>
  </TimelineItem>
  <TimelineItem start="1998">
    <template #middle>
      <span class="text-xl">💻</span>
    </template>
    <template #end>
      <div>
        <h3 class="font-bold">iMac</h3>
        <p>Revolutionary all-in-one computer.</p>
        <Button variant="primary" size="xs" class="mt-2">Learn More</Button>
      </div>
    </template>
  </TimelineItem>
  <TimelineItem 
    start="2001" 
    end="iPod"
    valid="true"
  />
  <TimelineItem 
    start="2007" 
    end="iPhone"
    valid="false"
  />
</Timeline>
`;

export const ManualMode: Story = {
  render: (args: any) => ({
    components: { Timeline, TimelineItem, Button },
    setup() {
      return {};
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

const nestedItemsTplStr = `
<script setup lang="ts">
import TimelineItem from './timeline-item.vue'
</script>
<Timeline>
  <TimelineItem start="2020" end="Main Event">
    <Timeline>
      <TimelineItem start="Jan" end="Sub-event 1" />
      <TimelineItem start="Apr" end="Sub-event 2" />
      <TimelineItem start="Dec" end="Sub-event 3" />
    </Timeline>
  </TimelineItem>
  <TimelineItem start="2021" end="Main Event 2">
    <Timeline>
      <TimelineItem start="Mar" end="Sub-event 1" />
      <TimelineItem start="Jun" end="Sub-event 2" />
    </Timeline>
  </TimelineItem>
</Timeline>
`;

export const NestedItems: Story = {
  render: (args: any) => ({
    components: { Timeline, TimelineItem },
    setup() {
      return {};
    },
    template: nestedItemsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: nestedItemsTplStr,
        language: "html",
      },
    },
  },
};
