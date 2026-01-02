import { type Variant } from "@/composables/useVariants";

export const TOOLTIP_POSITIONS = ["top", "right", "bottom", "left"] as const;
export type TooltipPosition = (typeof TOOLTIP_POSITIONS)[number];

export interface TooltipProps {
  variant?: Variant;
  dataTip?: string;
  open?: boolean;
  position?: TooltipPosition;
  responsive?: boolean;
}
