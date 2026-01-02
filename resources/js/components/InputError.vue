<script setup lang="ts">
  // DaisyUI error message component
  const props = defineProps<{ message?: string }>();
</script>

<template>
  <div v-if="props.message" class="text-error text-sm mt-1">
    {{ props.message }}
  </div>
</template>
