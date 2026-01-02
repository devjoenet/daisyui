<script setup lang="ts">
  import InputError from "@/components/InputError.vue";
  import Button from "@/components/ui/Button/Button.vue";
  import { Input } from "@/components/ui/Input";
  import AuthLayout from "@/layouts/AuthLayout.vue";
  import { store } from "@/routes/password/confirm";
  import { Form, Head } from "@inertiajs/vue3";
</script>

<template>
  <AuthLayout title="Confirm your password" description="This is a secure area of the application. Please confirm your password before continuing.">
    <Head title="Confirm password" />

    <Form v-bind="store.form()" reset-on-success v-slot="{ errors, processing }">
      <div class="space-y-6">
        <div class="grid gap-2">
          <Input label="Password" id="password" type="password" name="password" class="mt-1 block w-full" required autocomplete="current-password" autofocus />
          <InputError :message="errors.password" />
        </div>

        <div class="flex items-center">
          <Button type="submit" label="Confirm Password" processing-label="Confirming..." class="w-full" :processing="processing" :disabled="processing" data-test="confirm-password-button" />
        </div>
      </div>
    </Form>
  </AuthLayout>
</template>
