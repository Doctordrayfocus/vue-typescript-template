<template>
  <div class="py-5 w-full bg-green-100 flex flex-col justify-center items-center">
    <h1 class="font-bold text-lg">Hello main index page</h1>
    <h5>
      <router-link to="/about" class="underline text-green-700">About page</router-link>
    </h5>
    <h5>
      <router-link to="/home" class="underline text-green-700">Home page</router-link>
    </h5>
    <h5>
      <router-link to="/sample" class="underline text-green-700"
        >Sample index page</router-link
      >
    </h5>

    <h5>
      <router-link to="/sample/child" class="underline text-green-700"
        >Sample child page</router-link
      >
    </h5>

    <h5>
      <router-link to="/sample/second" class="underline text-green-700"
        >Sample Another child page</router-link
      >
    </h5>

    <h5>
      <router-link to="/sample/i-am-a-slug" class="underline text-green-700"
        >Sample slug page</router-link
      >
    </h5>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "Index",
  layout: "Sample",
  setup() {
    useMeta({
      title: "Index Page",
    });

    return {};
  },
});
</script>
