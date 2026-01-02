export const ALERT_VARIANTS = ["default", "success", "error", "warning", "info"] as const;
export type AlertVariant = (typeof ALERT_VARIANTS)[number];

export const ALERT_DIRECTIONS = ["default", "vertical", "horizontal", "responsive"] as const;
export type AlertDirection = (typeof ALERT_DIRECTIONS)[number];

export interface AlertProps {
  variant?: AlertVariant;
  direction?: AlertDirection;
  soft?: boolean;
  outline?: boolean;
  dash?: boolean;
  dismissible?: boolean;
  autoDismissible?: boolean;
  icon?: boolean;
}
