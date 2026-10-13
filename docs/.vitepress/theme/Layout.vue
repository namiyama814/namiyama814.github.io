<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute, useRouter } from 'vitepress';
import { computed, onMounted, onUnmounted, watch } from 'vue';

const { lang } = useData();
const route = useRoute();
const router = useRouter();
const en = computed(() => lang.value === 'en');
const { Layout } = DefaultTheme;
const notFoundEn = computed(() => en.value || route.path.startsWith('/en/'));

function redirectLegacyHash() {
  const home = /^\/(en\/?)?$/.test(window.location.pathname);
  if (!home) return;
  const targets: Record<string, string> = {
    '#about': '/about',
    '#skills': '/about#skills',
    '#career': '/activities',
  };
  const target = targets[window.location.hash];
  if (target) void router.go(`${window.location.pathname.startsWith('/en') ? '/en' : ''}${target}`);
}

onMounted(() => {
  redirectLegacyHash();
  window.addEventListener('hashchange', redirectLegacyHash);
});
watch(
  () => route.path,
  () => {
    if (typeof window !== 'undefined') redirectLegacyHash();
  },
);
onUnmounted(() => {
  window.removeEventListener('hashchange', redirectLegacyHash);
});
</script>

<template>
  <Layout>
    <template #not-found>
      <main class="missing-page">
        <p class="eyebrow">404</p>
        <h1>{{ notFoundEn ? 'Page not found' : 'ページが見つかりません' }}</h1>
        <a :href="notFoundEn ? '/en/' : '/'">{{ notFoundEn ? 'Return home' : 'ホームへ戻る' }}</a>
      </main>
    </template>
  </Layout>
</template>
