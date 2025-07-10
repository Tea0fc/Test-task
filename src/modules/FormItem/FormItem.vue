<script setup lang="ts">
import { watch, ref, reactive } from 'vue'
import type { IData, IMark, NoteTypes } from '../../types'
import { DeleteOutlined } from '@ant-design/icons-vue'
import { useDataStore } from '../../stores/DataStore'
import { debounce } from 'vue-debounce'

const { itemData } = defineProps<{ itemData: IData }>()
const dataStore = useDataStore()

const marksText = itemData.marks.map(mark => mark.text)
const marks = ref<string>(marksText.join('; '))
const typeValue = ref<NoteTypes>(itemData.type)
const login = ref<string>(itemData.login)
const password = ref<string | null>(itemData.password)

const errors = reactive({
  login: false,
  password: false
})

const state = reactive({
  isUpdating: false
})

const typeOptions: NoteTypes[] = ['local', 'LDAP']

watch(
  [marks, typeValue, login, password],
  debounce(([marks, typeValue, login, passwordReadOnly]) => {
    const validatePassword =
      itemData.type === 'LDAP' ? true : passwordReadOnly !== ''
    const passwordValue = typeValue === 'LDAP' ? null : passwordReadOnly
    if (!!login && validatePassword) {
      dataStore.setErrorState(false)
      dataStore.updateNote(itemData.id, {
        marks: marks.split(';').map((mark: string): IMark => {
          return { text: mark.trim() }
        }),
        type: typeValue,
        login,
        password: passwordValue
      })
      if (!passwordValue) {
        password.value = passwordValue
      }
    } else {
      dataStore.setErrorState(true)
    }

    new Array(!!login, validatePassword).map((value, index) => {
      if (index == 0) {
        errors.login = !value
      } else {
        errors.password = !value
      }
    })

    state.isUpdating = false
  }, '2000ms')
)

watch([marks, typeValue, login, password], () => {
  state.isUpdating = true
})
</script>

<template>
  <form
    class="form-item"
    :class="[itemData.type === 'LDAP' ? 'form-item-wide' : '']"
  >
    <a-input v-model:value="marks" placeholder="Введите метки" maxLength="50" />
    <a-select
      ref="select"
      style="text-transform: capitalize"
      v-model:value="typeValue"
    >
      <a-select-option
        v-for="option in typeOptions"
        :value="option"
        style="text-transform: capitalize"
        >{{ option }}</a-select-option
      >
    </a-select>
    <a-input
      v-model:value="login"
      placeholder="Введите логин"
      maxLength="100"
      :class="errors.login && 'form-item__input-error'"
    />
    <a-input-password
      v-if="itemData.type === 'local'"
      v-model:value="password"
      placeholder="Введите пароль"
      maxLength="100"
      :class="errors.password && 'form-item__input-error'"
    />
    <a-button
      type="text"
      @click="dataStore.deleteNote(itemData.id)"
      :loading="state.isUpdating"
    >
      <template #icon>
        <DeleteOutlined />
      </template>
    </a-button>
  </form>
</template>

<style lang="scss" scoped>
.form-item {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 2fr 28px;
  gap: 4px;

  &-wide {
    grid-template-columns: 2fr 1fr 4fr 28px;
  }

  &__input-error {
    border: 1px solid $borderCritical;
  }
}
</style>
