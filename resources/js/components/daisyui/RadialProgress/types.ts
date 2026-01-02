import { type Variant } from "@/composables/useVariants";
import { type Size } from "@/composables/useSizes";

export interface RadialProgressProps {
  value?: number;
  variant?: Variant;
  size?: Size | string;
  thickness?: string;
}
