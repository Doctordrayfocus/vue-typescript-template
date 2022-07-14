<template>
  <div class="w-full bg-orange-100 py-3 text-center mt-6">
    <h4>This is the Second sample child page</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "SecondIndexPage",
  layout: "Sample",
  setup() {
    useMeta({
      title: "Second Child Page",
    });
    return {};
  },
});
</script>
