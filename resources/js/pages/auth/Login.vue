<script setup lang="ts">
  import AuthenticatedSessionController from "@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController";
  import InputError from "@/components/InputError.vue";
  import TextLink from "@/components/TextLink.vue";
  import { Button } from "@/components/ui/Button";
  import Checkbox from "@/components/ui/Checkbox.vue";
  import { Input } from "@/components/ui/Input";
  import Label from "@/components/ui/label.vue";
  import AuthBase from "@/layouts/AuthLayout.vue";
  import { register } from "@/routes";
  import { request } from "@/routes/password";
  import { Form, Head } from "@inertiajs/vue3";

  const props = defineProps<{
    status?: string;
    canResetPassword: boolean;
  }>();
</script>

<template>
  <AuthBase title="Log in to your account" description="Enter your email and password below to log in">
    <Head title="Log in" />

    <div v-if="props.status" class="mb-4 text-center text-sm font-medium text-success">
      {{ props.status }}
    </div>

    <Form v-bind="AuthenticatedSessionController.store.form()" :reset-on-success="['password']" v-slot="{ errors, processing }" class="flex flex-col gap-6">
      <div class="grid gap-6">
        <div class="grid gap-2">
          <Input id="email" type="email" name="email" required autofocus :tabindex="1" autocomplete="email" label="Email Address" />
          <InputError :message="errors.email" />
        </div>

        <div class="grid gap-2">
          <fieldset class="fieldset">
            <Input id="password" type="password" name="password" required :tabindex="2" autocomplete="current-password" label="Password" />
            <p class="label w-full flex"><TextLink v-if="canResetPassword" :href="request().url" class="text-sm ml-auto" :tabindex="5"> Forgot password? </TextLink></p>
            <InputError :message="errors.password" />
          </fieldset>
        </div>

        <div class="flex items-center justify-between">
          <Label for="remember" class="flex items-center space-x-3">
            <Checkbox id="remember" class="checked:bg-accent checked:text-accent-content" name="remember" :tabindex="3" />
            <span>Remember me</span>
          </Label>
        </div>
        <Button label="Log In" processing-label="Logging In..." :processing="processing" type="submit" :tabindex="4" :disabled="processing" data-test="login-button" />
      </div>

      <div class="text-muted-foreground text-center text-sm">
        Don't have an account?
        <TextLink :href="register().url" :tabindex="5">Sign up</TextLink>
      </div>
    </Form>
  </AuthBase>
</template>
