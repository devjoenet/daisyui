<script setup lang="ts">
  import { computed, ref, type InputHTMLAttributes, type InputTypeHTMLAttribute } from "vue";
  import { cn } from "@/lib/utils";
  import type { InputVariants } from "./variants";
  import { inputVariants } from "./variants";

  const props = withDefaults(
    defineProps<{
      type?: InputTypeHTMLAttribute;
      color?: InputVariants["color"];
      focusColor?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
      size?: InputVariants["size"];
      name?: InputHTMLAttributes["name"];
      id: InputHTMLAttributes["id"];
      value?: InputHTMLAttributes["value"];
      class?: InputHTMLAttributes["class"];
      label: string;
      required?: InputHTMLAttributes["required"];
      autofocus?: InputHTMLAttributes["autofocus"];
      autocomplete?: InputHTMLAttributes["autocomplete"];
      tabindex?: InputHTMLAttributes["tabindex"];
    }>(),
    {
      type: "text",
      color: "neutral",
      focusColor: "accent",
      size: "md",
      required: false,
    },
  );

  const isFocussed = ref(false);

  const handleFocus = () => {
    isFocussed.value = true;
  };

  const handleBlur = () => {
    isFocussed.value = false;
  };
  const inputColor = computed(() => {
    return !isFocussed.value ? `input-${props.color}` : `input-${props.focusColor}`;
  });
</script>
<template>
  <label :for="props.id" :id="`${props.id}-label`" class="floating-label floating-label-accent">
    <span>{{ props.label }}</span>
    <input
      :type="props.type ?? 'text'"
      :placeholder="props.label"
      :name="props.name"
      :id="props.id"
      :value="props.value"
      :class="cn(inputVariants({ size }), inputColor, props.class)"
      :required="props.required"
      :autofocus="props.autofocus"
      :autocomplete="props.autocomplete"
      :tabindex="props.tabindex"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </label>
</template>
