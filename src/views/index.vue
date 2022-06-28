<template>
  <h1>Hello main index page</h1>
  <h5>
    <router-link to="/about">About page</router-link>
  </h5>
  <h5>
    <router-link to="/home">Home page</router-link>
  </h5>
  <h5>
    <router-link to="/sample">Sample index page</router-link>
  </h5>

  <h5>
    <router-link to="/sample/i-am-a-slug">Sample slug page</router-link>
  </h5>
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
