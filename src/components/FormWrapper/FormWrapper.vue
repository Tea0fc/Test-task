<script setup lang="ts">
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
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
  <div class="form-hint">
    <InfoCircleOutlined class="form-hint__icon" />
    <p class="form-hint__text">
      Для указания нескольких меток для одной пары логин/пароль используйте
      разделитель ;
    </p>
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

.form-hint {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;
  background-color: $bgAccentSubdued;
  border-radius: 6px;

  &__icon {
    color: $iconSecondary;
  }

  &__text {
    font: $fontP6;
    color: $textSecondary;
  }
}
</style>
