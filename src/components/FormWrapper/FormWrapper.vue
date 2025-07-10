<script setup lang="ts">
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
import FormList from '../../modules/FormList/FormList.vue'
</script>

<template>
  <section class="form-wrapper">
    <div class="form-wrapper__header">
      <h1 class="form-wrapper__header__title">Учетные записи</h1>
      <a-button class="form-wrapper__header__button">
        <template #icon>
          <PlusOutlined />
        </template>
      </a-button>
    </div>
    <div class="form-wrapper__hint">
      <InfoCircleOutlined class="form-wrapper__hint__icon" />
      <p class="form-wrapper__hint__text">
        Для указания нескольких меток для одной пары логин/пароль используйте
        разделитель ;
      </p>
    </div>
    <FormList />
  </section>
</template>

<style scoped lang="scss">
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__header {
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 16px 0;

    &__title {
      font: $fontH2;
    }
  }

  &__hint {
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
}
</style>
