import type { HTMLAttributes, InputHTMLAttributes } from "vue";

export const ACCORDION_MODIFIERS = ["collapse-arrow", "collapse-plus", "collapse-open", "collapse-close"] as const;

export interface ACCORDIONItem {
  title?: string;
  content?: string;
  checked?: InputHTMLAttributes["checked"];
  customClass?: HTMLAttributes["class"];
}

export type ACCORDIONModifier = (typeof ACCORDION_MODIFIERS)[number];
