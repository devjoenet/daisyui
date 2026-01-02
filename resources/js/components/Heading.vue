<script setup lang="ts">
  const props = defineProps<{ title?: string; description?: string }>();
</script>

<template>
  <div class="mb-6">
    <h2 class="text-2xl font-bold text-fuchsia-700">{{ props.title }}</h2>
    <p v-if="props.description" class="text-sm text-gray-500 mt-1">{{ props.description }}</p>
  </div>
</template>
