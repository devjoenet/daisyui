import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
export const buttonVariants = cva("btn", {
  variants: {
    color: {
      default: "btn-primary",
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
    },
    variant: {
      default: null,
      outline: "btn-outline",
      dash: "btn-dash",
      soft: "btn-soft",
      ghost: "btn-ghost",
      link: "btn-link",
    },
    size: {
      default: "btn-md",
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
    modifier: {
      default: null,
      wide: "btn-wide",
      block: "btn-block",
      square: "btn-square",
      circle: "btn-circle",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
    modifier: "default",
    variant: "default",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
