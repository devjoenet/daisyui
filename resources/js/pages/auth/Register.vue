<script setup lang="ts">
  import RegisteredUserController from "@/actions/App/Http/Controllers/Auth/RegisteredUserController";
  import InputError from "@/components/InputError.vue";
  import { Input } from "@/components/ui/Input";
  import { Button } from "@/components/ui/Button";
  import AuthBase from "@/layouts/AuthLayout.vue";
  import { login } from "@/routes";
  import { Form, Head, Link } from "@inertiajs/vue3";
</script>

<template>
  <AuthBase title="Create an account" description="Enter your details below to create your account">
    <Head title="Register" />

    <Form v-bind="RegisteredUserController.store.form()" :reset-on-success="['password', 'password_confirmation']" v-slot="{ errors, processing }" class="flex flex-col gap-6">
      <div class="grid gap-6">
        <div class="grid gap-2">
          <Input id="name" name="name" label="Full Name" :tabindex="1" />
          <InputError :message="errors.name" />
        </div>

        <div class="grid gap-2">
          <Input id="email" name="email" type="email" label="Email Address" autocomplete="email" :tabindex="2" />
          <InputError :message="errors.email" />
        </div>

        <div class="grid gap-2">
          <Input label="Password" id="password" name="password" type="password" :tabindex="3" />
          <InputError :message="errors.password" />
        </div>

        <div class="grid gap-2">
          <Input label="Confirm Password" id="password_confirmation" name="password_confirmation" type="password" :tabindex="4" />
          <InputError :message="errors.password_confirmation" />
        </div>

        <Button :tabindex="5" label="Create Account" processing-label="Creating..." :processing="processing" type="submit" :disabled="processing" data-test="register-user-button" />
      </div>

      <div class="text-center text-sm text-muted-foreground">
        Already have an account?
        <Link :href="login()" :tabindex="6">Log in</Link>
      </div>
    </Form>
  </AuthBase>
</template>
