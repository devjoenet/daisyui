<script setup lang="ts">
  import Button from "@/components/ui/Button/Button.vue";
  import Input from "@/components/ui/Input/Input.vue";
  import AppLayout from "@/layouts/AppLayout.vue";
  import { dashboard } from "@/routes";
  import { type BreadcrumbItem } from "@/types";
  import { Head } from "@inertiajs/vue3";

  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: "Dashboard",
      href: dashboard().url,
    },
  ];
</script>

<template>
  <Head title="Dashboard" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="space-y-8 p-6">
      <h1 class="mb-4 text-2xl font-bold">daisyUI Component Showcase</h1>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Actions -->
        <div>
          <h2 class="mb-2 font-semibold">Actions</h2>
          <Button type="button" color="neutral" :disabled="false">Button</Button>
          <Button type="button" :disabled="false" color="primary">Primary Button</Button>
          <Button type="button" color="secondary" :disabled="false">Secondary Button</Button>
          <Button type="button" color="info" variant="outline" :disabled="false">Outline Button</Button>
          <Button type="button" color="accent" :disabled="false">Accent Button</Button>
          <Button type="button" color="neutral" variant="ghost" :disabled="false">Ghost Button</Button>
          <Button type="button" color="primary" variant="link" :disabled="false">Link Button</Button>
        </div>
        <!-- Data display -->
        <div>
          <h2 class="mb-2 font-semibold">Data display</h2>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-title">Downloads</div>
              <div class="stat-value">31K</div>
              <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            <div class="stat">
              <div class="stat-title">Users</div>
              <div class="stat-value">4,200</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>
          <progress class="progress mt-4 w-full progress-primary" value="70" max="100"></progress>
        </div>
        <!-- Navigation -->
        <div>
          <h2 class="mb-2 font-semibold">Navigation</h2>
          <div class="menu rounded-box bg-base-200 p-2">
            <ul>
              <li><a>Dashboard</a></li>
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
            </ul>
          </div>
          <div class="tabs-boxed mt-4 tabs">
            <a class="tab-active tab">Tab 1</a>
            <a class="tab">Tab 2</a>
            <a class="tab">Tab 3</a>
          </div>
        </div>
        <!-- Feedback -->
        <div>
          <h2 class="mb-2 font-semibold">Feedback</h2>
          <div class="mb-2 alert alert-success">Success! Your action was completed.</div>
          <div class="mb-2 alert alert-error">Error! Something went wrong.</div>
          <div class="mb-2 alert alert-warning">Warning! Check your input.</div>
          <div class="alert alert-info">Info! This is an informational message.</div>
        </div>
        <!-- Data input -->
        <div>
          <h2 class="mb-2 font-semibold">Data input</h2>
          <Input id="demo" label="Type Here" />
          <input type="checkbox" class="checkbox mr-2" /> Checkbox
          <input type="radio" name="radio-1" class="radio mr-2" checked />
          Radio
          <input type="range" min="0" max="100" value="50" class="range mt-2 w-full" />
          <select class="select-bordered select mt-2 w-full">
            <option disabled selected>Pick one</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <!-- Layout -->
        <div>
          <h2 class="mb-2 font-semibold">Layout</h2>
          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Card title</h2>
              <p>Card content goes here.</p>
              <div class="card-actions justify-end">
                <Button type="button" :disabled="false" class="btn btn-primary">Action</Button>
              </div>
            </div>
          </div>
          <div class="mockup-window mt-4 border bg-base-300">
            <div class="flex justify-center bg-base-200 px-4 py-8">Mockup window content</div>
          </div>
        </div>
        <!-- Mockup -->
        <div>
          <h2 class="mb-2 font-semibold">Mockup</h2>
          <div class="mockup-code">
            <pre data-prefix="$"><code>npm install daisyui</code></pre>
            <pre data-prefix=">"><code>Done!</code></pre>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
