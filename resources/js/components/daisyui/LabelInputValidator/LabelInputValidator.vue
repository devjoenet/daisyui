<script setup lang="ts">
  import { InputField } from "../InputField";
  import { Label } from "../Label";
  import { type LabelInputValidatorProps } from "./types";

  const props = withDefaults(defineProps<LabelInputValidatorProps>(), {
    type: "floating-label",
    pattern: "[A-Za-z][A-Za-z0-9\\-]*",
    required: false,
    placeholder: "",
    inputType: "text",
    disabled: false,
  });
</script>

<template>
  <Label :class="[type, 'validator']">
    <slot name="before"></slot>
    <InputField :required="required" :pattern="pattern" :minlength="minlength" :maxlength="maxlength" :title="title" :type="inputType" :placeholder="placeholder" :disabled="disabled" :suggestionName="suggestionName" :suggestionList="suggestionList" />
    <slot name="after"></slot>
  </Label>
  <p class="validator-hint" v-if="$slots.hint">
    <slot name="hint"></slot>
  </p>
</template>
