import { type Variant } from "../../composables/useVariants";
import { type Size } from "../../composables/useSizes";

export const LOADING_ANIMATIONS = ["spinner", "dots", "ring", "ball", "bars", "infinity"] as const;
export type LoadingAnimation = (typeof LOADING_ANIMATIONS)[number];

export interface LoadingProps {
  animation?: LoadingAnimation;
  size?: Size;
  variant?: Variant;
}
