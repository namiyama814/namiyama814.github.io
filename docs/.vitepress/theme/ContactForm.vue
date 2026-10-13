<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();
const en = computed(() => lang.value === 'en');
</script>

<template>
  <form class="contact-form" action="https://formspree.io/f/xgawlzep" method="POST">
    <input
      type="hidden"
      name="_subject"
      :value="en ? 'Message from namiyama’s website' : '個人サイトからのお問い合わせ'"
    />
    <label for="contact-name">{{ en ? 'Name (required)' : 'お名前（必須）' }}</label>
    <input id="contact-name" type="text" name="name" autocomplete="name" required />
    <label for="contact-email">{{ en ? 'Email (required)' : 'メールアドレス（必須）' }}</label>
    <input id="contact-email" type="email" name="email" autocomplete="email" required />
    <label for="contact-message">{{ en ? 'Message (required)' : 'メッセージ（必須）' }}</label>
    <textarea id="contact-message" name="message" rows="6" required></textarea>
    <button type="submit">{{ en ? 'Send message' : '送信する' }}</button>
  </form>
</template>
