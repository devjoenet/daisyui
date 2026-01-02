import { type Variant } from "../../composables/useVariants";

export interface ProgressProps {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  variant?: Variant;
}
