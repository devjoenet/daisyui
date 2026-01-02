import { type Size } from "@/composables/useSizes";

export const MENU_DIRECTIONS = ["default", "vertical", "horizontal", "responsive"] as const;
export type MenuDirection = (typeof MENU_DIRECTIONS)[number];

export interface MenuItem {
  label: string;
  href?: string;
  disabled?: boolean;
  isTitle?: boolean;
  subItems?: MenuItem[];
  value?: string | number;
  onClick?: () => void;
  checked?: boolean;
  multiple?: boolean;
  active?: boolean; // Nouvelle propriété pour marquer un item comme actif
}

export interface MenuProps {
  direction?: MenuDirection;
  size?: Size;
  rounded?: boolean;
  items?: MenuItem[];
  activeItem?: string;
  onItemClick?: (item: MenuItem) => void;
  onSubItemClick?: (item: MenuItem) => void;
}
