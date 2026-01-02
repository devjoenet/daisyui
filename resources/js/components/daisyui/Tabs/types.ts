import { type Size } from "@/composables/useSizes";

export const TABS_TYPES = ["lift", "border", "box"] as const;
export type TabsType = (typeof TABS_TYPES)[number];

export interface TabItem {
  label?: string;
  icon?: any;
  class?: string;
  active?: boolean;
  onClick?: () => void;
  content?: string;
  [key: string]: any;
}

export interface TabsProps {
  size?: Size;
  items?: TabItem[];
  type?: TabsType;
  bottom?: boolean;
  name?: string;
}
