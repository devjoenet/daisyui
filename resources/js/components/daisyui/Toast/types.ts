export const TOAST_HORIZONTAL_POSITIONS = ["start", "center", "end"] as const;
export type ToastHorizontalPosition = (typeof TOAST_HORIZONTAL_POSITIONS)[number];

export const TOAST_VERTICAL_POSITIONS = ["top", "middle", "bottom"] as const;
export type ToastVerticalPosition = (typeof TOAST_VERTICAL_POSITIONS)[number];

export interface ToastProps {
  horizontalPosition?: ToastHorizontalPosition;
  verticalPosition?: ToastVerticalPosition;
  to?: string;
}
