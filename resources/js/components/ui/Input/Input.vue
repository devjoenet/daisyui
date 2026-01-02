<script setup lang="ts">
  import type { InputHTMLAttributes, InputTypeHTMLAttribute } from "vue";
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
</script>
<template>
  <label :for="props.id" :id="`${props.id}-label`" :class="`floating-label text-${props.focusColor}`">
    <span>{{ props.label }}</span>
    <input
      :type="props.type ?? 'text'"
      :placeholder="props.label"
      :name="props.name"
      :id="props.id"
      :value="props.value"
      :class="cn(inputVariants({ color, size }), `input-${props.focusColor}`, props.class)"
      :required="props.required"
      :autofocus="props.autofocus"
      :autocomplete="props.autocomplete"
      :tabindex="props.tabindex"
    />
  </label>
</template>
