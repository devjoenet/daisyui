<script setup lang="ts">
  import PasswordResetLinkController from "@/actions/App/Http/Controllers/Auth/PasswordResetLinkController";
  import InputError from "@/components/InputError.vue";
  import TextLink from "@/components/TextLink.vue";
  import Button from "@/components/ui/Button/Button.vue";
  import { Input } from "@/components/ui/Input";
  import AuthLayout from "@/layouts/AuthLayout.vue";
  import { login } from "@/routes";
  import { Form, Head } from "@inertiajs/vue3";

  defineProps<{
    status?: string;
  }>();
</script>

<template>
  <AuthLayout title="Forgot password" description="Enter your email to receive a password reset link">
    <Head title="Forgot password" />

    <div v-if="status" class="mb-4 text-center text-sm font-medium text-green-600">
      {{ status }}
    </div>

    <div class="space-y-6">
      <Form v-bind="PasswordResetLinkController.store.form()" v-slot="{ errors, processing }">
        <div class="grid gap-2">
          <Input label="Email Address" id="email" type="email" name="email" autocomplete="off" autofocus />
          <InputError :message="errors.email" />
        </div>

        <div class="my-6 flex items-center justify-start">
          <Button label="Email password reset link" processing-label="Processing..." type="submit" class="w-full" :disabled="processing" data-test="email-password-reset-link-button" />
        </div>
      </Form>

      <div class="text-muted-foreground space-x-1 text-center text-sm">
        <span>Or, return to</span>
        <TextLink :href="login().url">log in</TextLink>
      </div>
    </div>
  </AuthLayout>
</template>
