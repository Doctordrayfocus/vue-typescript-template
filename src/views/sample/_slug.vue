<template>
  <div>
    <h1>This is a page with dynamic routing -> {{ slug }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SampleSlugPage",
  layout: "Sample",
  setup() {
    const route = useRoute();

    const slug = route.params.slug;

    useMeta({
      title: "Sample | " + slug,
    });
    return { slug };
  },
});
</script>
