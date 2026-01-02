import { type Variant } from "@/composables/useVariants";
import { type Size } from "@/composables/useSizes";

export interface FilterButtonArgs {
  variant?: Variant;
  size?: Size;
  outline?: boolean;
  soft?: boolean;
  dash?: boolean;
  active?: boolean;
  ghost?: boolean;
  link?: boolean;
  wide?: boolean;
  disabled?: boolean;
  square?: boolean;
  circle?: boolean;
}

export interface FilterItem {
  title?: string;
  checked?: boolean;
  customClass?: string;
  buttonsArgs?: FilterButtonArgs;
}

export interface FilterProps {
  items?: FilterItem[];
  name?: string;
  buttonsArgs?: FilterButtonArgs;
}
