import { type LABELProps } from "../Label/types";
import { type INPUTFIELDProps, type INPUTFIELDType } from "../InputField/types";

export interface LabelInputValidatorProps extends LABELProps, Omit<INPUTFIELDProps, "type" | "size" | "ghost" | "variant"> {
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  title?: string;
  required?: boolean;
  inputType?: INPUTFIELDType;
}
