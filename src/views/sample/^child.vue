<template>
  <div class="w-full bg-green-100 py-3 text-center">
    <h4>This is the sample child page</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "ChildIndexPage",
  layout: "Sample",
  setup() {
    useMeta({
      title: "Sample Child Page",
    });
    return {};
  },
});
</script>
