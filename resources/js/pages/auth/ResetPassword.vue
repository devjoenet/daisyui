<script setup lang="ts">
  import NewPasswordController from "@/actions/App/Http/Controllers/Auth/NewPasswordController";
  import InputError from "@/components/InputError.vue";
  import Button from "@/components/ui/Button/Button.vue";
  import { Input } from "@/components/ui/Input";
  import AuthLayout from "@/layouts/AuthLayout.vue";
  import { Form, Head } from "@inertiajs/vue3";
  import { ref } from "vue";

  const props = defineProps<{
    token: string;
    email: string;
  }>();

  const inputEmail = ref(props.email);
</script>

<template>
  <AuthLayout title="Reset password" description="Please enter your new password below">
    <Head title="Reset password" />

    <Form v-bind="NewPasswordController.store.form()" :transform="(data) => ({ ...data, token, email })" :reset-on-success="['password', 'password_confirmation']" v-slot="{ errors, processing }">
      <div class="grid gap-6">
        <div class="grid gap-2">
          <Input label="Email" id="email" type="email" name="email" autocomplete="email" v-model="inputEmail" class="mt-1 block w-full" readonly />
          <InputError :message="errors.email" class="mt-2" />
        </div>

        <div class="grid gap-2">
          <Input label="Password" id="password" type="password" name="password" autocomplete="new-password" class="mt-1 block w-full" autofocus />
          <InputError :message="errors.password" />
        </div>

        <div class="grid gap-2">
          <Input label="Confirm Password" id="password_confirmation" type="password" name="password_confirmation" autocomplete="new-password" class="mt-1 block w-full" />
          <InputError :message="errors.password_confirmation" />
        </div>

        <Button type="submit" label="Reset Password" processing-label="Resetting..." :disabled="processing" :processing="processing" data-test="reset-password-button" />
      </div>
    </Form>
  </AuthLayout>
</template>
