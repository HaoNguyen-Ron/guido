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

</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>

<style scoped></style>
