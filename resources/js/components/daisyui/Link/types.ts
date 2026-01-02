import { type Variant } from "@/composables/useVariants";

export interface LinkProps {
  variant?: Variant;
  onlyUnderlineOnHover?: boolean;
  ghost?: boolean;
}
