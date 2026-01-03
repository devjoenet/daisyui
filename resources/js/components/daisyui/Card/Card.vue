<script setup lang="ts">
  import { computed } from "vue";
  import { type Size, useSizeMapping } from "@/composables/useSizes";

  const props = withDefaults(
    defineProps<{
      color?: string;
      textColor?: string;
      size?: Size;
      bordered?: boolean;
      dash?: boolean;
      side?: boolean;
      imageFull?: boolean;
      responsive?: boolean;
      title?: string;
      description?: string;
    }>(),
    {
      color: "base-200",
      textColor: "base-content",
      size: "default",
      bordered: false,
      dash: false,
      side: false,
      imageFull: false,
      responsive: false,
    },
  );

  const { sizeClass } = useSizeMapping(props, "card");

  const borderedClass = computed(() => {
    return props.bordered ? "card-border" : "";
  });

  const dashClass = computed(() => {
    return props.dash ? "card-dash" : "";
  });

  const sideClass = computed(() => {
    return props.side ? "card-side" : "";
  });

  const responsiveClass = computed(() => {
    return props.responsive ? "card-compact sm:card-normal" : "";
  });

  const imageFullClass = computed(() => {
    return props.imageFull ? "image-full" : "";
  });
</script>

<template>
  <div :class="['card', `bg-${props.color}`, `bg-${props.textColor}`, sizeClass, borderedClass, dashClass, sideClass, responsiveClass, imageFullClass]">
    <slot name="figure" />
    <div class="card-body">
      <h2 v-if="props.title" class="text-base-content text-xl card-title flex-wrap">{{ props.title }}</h2>
      <p v-if="props.description" class="text-base-content text-sm py-6">{{ props.description }}</p>
      <div v-if="$slots.default" class="px-10 py-8">
        <slot />
      </div>
    </div>
    <div v-if="$slots.actions" class="card-actions justify-end">
      <slot name="actions" />
    </div>
  </div>
</template>
