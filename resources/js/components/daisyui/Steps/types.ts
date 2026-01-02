import { type Variant } from "../../composables/useVariants";

export const STEPS_DIRECTIONS = ["steps-vertical", "steps-horizontal"] as const;
export type StepsDirection = (typeof STEPS_DIRECTIONS)[number];

export interface StepItem {
  label?: string;
  active?: boolean;
  customClass?: string;
  dataContent?: string;
}

export interface StepsProps {
  items?: StepItem[];
  direction?: StepsDirection;
  customClass?: string;
  responsive?: boolean;
  activeSteps?: number[];
  variant?: Variant;
}
