<script setup lang="ts">
  import { inject } from "vue";
  import { HTMLAttributes, InputHTMLAttributes } from "vue";

  const props = withDefaults(
    defineProps<{
      checked?: InputHTMLAttributes["checked"];
      customClass?: HTMLAttributes["class"];
      title?: string;
    }>(),
    {
      checked: false,
      customClass: "",
      title: "",
    },
  );

  // Get the accordion name from parent
  const accordionName = inject("accordionName", "");
</script>

<template>
  <div :class="['collapse', 'bg-base-100 border border-base-300', props.customClass]">
    <input type="radio" :name="accordionName" :checked="props.checked ? true : undefined" />
    <div class="collapse-title">
      <slot name="title">
        {{ props.title }}
      </slot>
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
