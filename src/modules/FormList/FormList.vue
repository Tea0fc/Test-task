<script setup lang="ts">
import { useDataStore } from '@/stores/DataStore'
import EmptyState from '@/modules/EmptyState/EmptyState.vue'
import FormItem from '@/modules/FormItem/FormItem.vue'

const dataStore = useDataStore()

const subtitles = ['Метки', 'Тип записи', 'Логин', 'Пароль']
</script>

<template>
  <div class="form-grid">
    <ul class="form-grid__subtitles">
      <li class="form-grid__subtitles__item" v-for="subtitle in subtitles">
        <span>{{ subtitle }}</span>
      </li>
    </ul>
    <ul v-if="dataStore.data.length > 0" class="form-grid__list">
      <FormItem v-for="item in dataStore.data" :itemData="item" />
    </ul>
    <EmptyState v-else />
  </div>
</template>

<style lang="scss" scoped>
.form-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 32px 0 0 0;
  overflow-y: auto;
  overflow-x: hidden;

  &__subtitles {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 2fr 28px;
    gap: 4px;

    &__item {
      font: $fontP8;
      color: $textSecondary;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
