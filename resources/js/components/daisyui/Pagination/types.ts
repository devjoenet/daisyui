import { type Size } from "@/composables/useSizes";
import { type Variant } from "@/composables/useVariants";

export interface PaginationProps {
  modelValue?: number;
  total: number;
  perPage?: number;
  showNext?: boolean;
  showPrevious?: boolean;
  showFirst?: boolean;
  showLast?: boolean;
  size?: Size;
  nextLabel?: string;
  previousLabel?: string;
  firstLabel?: string;
  lastLabel?: string;
  variant?: Variant;
  outline?: boolean;
  manual?: boolean;
  showEllipsis?: boolean;
  maxPages?: number;
}
