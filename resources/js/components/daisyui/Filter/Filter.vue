<script setup lang="ts">
  import { computed, provide } from "vue";
  import { Button } from "../Button";
  import { type FilterProps } from "./types";

  const props = withDefaults(defineProps<FilterProps>(), {
    items: undefined,
    name: undefined,
  });

  const filterName = computed(() => {
    return props.name || `filter-${Math.random().toString(36).substring(2, 9)}`;
  });

  provide("filterName", filterName);
</script>

<template>
  <div class="filter">
    <Button customClass="btn filter-reset" v-bind="props.buttonsArgs" :checked="true" label="All" />

    <!-- Dynamic items mode -->
    <template v-if="items">
      <Button v-for="(item, index) in items" :key="index" v-bind="props.buttonsArgs || item.buttonsArgs" :class="[item.customClass]" :checked="item.checked" :aria-label="item.title" />
    </template>

    <!-- Manual mode -->
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
