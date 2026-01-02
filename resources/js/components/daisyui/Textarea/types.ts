import { type Variant } from "@/composables/useVariants";
import { type Size } from "@/composables/useSizes";

export interface TEXTAREAProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  ghost?: boolean;
}
