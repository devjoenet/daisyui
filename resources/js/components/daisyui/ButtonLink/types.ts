import { type Variant } from "../../composables/useVariants";
import { type Size } from "../../composables/useSizes";

export interface ButtonLinkProps {
  size?: Size;
  variant?: Variant;
  outline?: boolean;
  soft?: boolean;
  dash?: boolean;
  active?: boolean;
  ghost?: boolean;
  link?: boolean;
  wide?: boolean;
  square?: boolean;
  circle?: boolean;
  block?: boolean;
}
