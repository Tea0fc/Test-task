<script setup lang="ts">
import { NotificationOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="empty-state">
    <NotificationOutlined />
    <p class="empty-state__text">Ваш список учетных записей пока пуст.</p>
  </div>
</template>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
  margin-top: 8px;
  background-color: $bgAccentSubdued;
  border-radius: 10px;

  &__text {
    font: $fontP6;
  }
}
</style>
