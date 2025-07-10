<script setup lang="ts">
import { GithubOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <footer class="footer">
    <nav class="footer__links">
      <a-button
        class="footer__links__button"
        href="https://github.com/Tea0fc"
        target="_blank"
        type="link"
      >
        <template #icon>
          <GithubOutlined />
        </template>
      </a-button>
      <a-button
        class="footer__links__button"
        href="https://t.me/Tea0fc"
        target="_blank"
        type="link"
        >TG: @Tea0fc</a-button
      >
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  height: 150px;
  width: 100%;
  background-color: $bgAccentSubdued;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 24px;
  border-radius: 16px 16px 0 0;

  &__links {
    display: flex;

    &__button {
      color: $textPrimary;

      &:hover {
        color: $textSecondary;
      }

      &:active {
        color: $textPrimary;
      }
    }
  }
}
</style>
