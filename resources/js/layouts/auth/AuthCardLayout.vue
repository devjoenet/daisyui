<script setup lang="ts">
  import AppLogoIcon from "@/components/AppLogoIcon.vue";
  import { Card } from "@/components/daisyui/Card";
  import { home } from "@/routes";
  import { Link } from "@inertiajs/vue3";

  const props = defineProps<{
    title?: string;
    description?: string;
  }>();
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
    <div class="flex w-full max-w-md flex-col gap-6">
      <Link :href="home()" class="flex items-center gap-2 self-center font-medium">
        <div class="flex h-24 w-24 items-center justify-center">
          <AppLogoIcon />
        </div>
      </Link>

      <div class="flex flex-col gap-6">
        <Card class="rounded-xl shadow-md" :bordered="true" :title="props.title" :description="props.description">
          <slot />
        </Card>
      </div>
    </div>
  </div>
</template>
