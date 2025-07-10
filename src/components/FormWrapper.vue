<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="form-title">
    <h1 class="form-title__text">Учетные записи</h1>
    <a-button class="form-title__button">
      <template #icon>
        <PlusOutlined />
      </template>
    </a-button>
  </div>
</template>

<style scoped lang="scss">
.form-title {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 0;

  &__text {
    font: $fontH2;
  }
}
</style>
