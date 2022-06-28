<template>
  <div>
    <h1>This is the sample index page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "SampleIndexPage",
  layout: "Sample",
  setup() {
    useMeta({
      title: "Sample Index Page",
    });
    return {};
  },
});
</script>
