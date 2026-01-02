import { type Variant } from "../../composables/useVariants";

export interface StepItemProps {
  label?: string;
  active?: boolean;
  customClass?: string;
  dataContent?: string;
  variant?: Variant;
}
