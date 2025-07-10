<script setup lang="ts">
import { ref } from 'vue'
import type { IData, NoteTypes } from '../../types'
import { DeleteOutlined } from '@ant-design/icons-vue'
import { useDataStore } from '../../stores/DataStore'

const { id, type } = defineProps<Pick<IData, 'id' | 'type'>>()
const dataStore = useDataStore()

const marks = ref<string>('')
const typeValue = ref<NoteTypes>('local')
const login = ref<string>('')
const password = ref<string>('')
const typeOptions: NoteTypes[] = ['local', 'LDAP']
</script>

<template>
  <form class="form-item" :class="[type === 'LDAP' ? 'huge' : '']">
    <a-input v-model:value="marks" placeholder="Введите метки" />
    <a-select
      ref="select"
      style="text-transform: capitalize"
      v-model:value="typeValue"
    >
      <a-select-option
        v-for="option in typeOptions"
        value="option"
        style="text-transform: capitalize"
        >{{ option }}</a-select-option
      >
    </a-select>
    <a-input v-model:value="login" placeholder="Введите логин" />
    <a-input
      v-if="type === 'local'"
      v-model:value="password"
      placeholder="Введите пароль"
    />
    <a-button type="text" @click="dataStore.deleteNote(id)">
      <template #icon>
        <DeleteOutlined />
      </template>
    </a-button>
  </form>
</template>

<style lang="scss" scoped>
.form-item {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 2fr 0.1fr;
  gap: 4px;

  &.huge {
    grid-template-columns: 2fr 1fr 4fr 0.1fr;
  }
}
</style>
