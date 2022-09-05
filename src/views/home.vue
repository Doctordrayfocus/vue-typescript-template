<template>
  <div class="w-full flex flex-row text-center">
    <span class="font-bold text-lg">Home Page</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomePage",
  layout: "Sample",
  components: {},
  setup() {
    useMeta({
      title: "Home Page",
    });

    return {};
  },
});
</script>
