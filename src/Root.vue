<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import LayoutDefault from './layouts/default.vue'
import LayoutAuth from './layouts/auth.vue'

const route = useRoute()

const currentLayout = computed(() => route.meta.layout || 'default')

const layoutMap = {
  default: LayoutDefault,
  auth: LayoutAuth
}

const VNodeLayout = computed(() => layoutMap[currentLayout.value])
</script>

<template>
  <div>
    <Component :is="VNodeLayout">
      <RouterView />
    </Component>
  </div>
</template>

<style scoped></style>
