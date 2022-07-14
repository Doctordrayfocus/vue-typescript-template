<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | SiteName` : `SiteName`
    }}</template>
  </metainfo>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>
<script lang="ts">
import { useMeta } from "vue-meta";

export default {
  setup(): unknown {
    useMeta({
      title: "Home",
      htmlAttrs: { lang: "en", amp: true },
    });

    return {};
  },
};
</script>
