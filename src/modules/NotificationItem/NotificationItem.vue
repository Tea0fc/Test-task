<script setup lang="ts">
import { CloseOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { useNotificationStore } from '../../stores/NotificationStore'
import { onMounted, ref } from 'vue'

const { id } = defineProps<{ id: number }>()

const isHidingTime = ref<boolean>(false)

const notificationStore = useNotificationStore()

const closeNotification = () => {
  isHidingTime.value = true

  setTimeout(() => {
    notificationStore.deleteNotification(id)
  }, 400)
}

onMounted(() => {
  setTimeout(() => (isHidingTime.value = true), 4600)
  setTimeout(() => notificationStore.deleteNotification(id), 5000)
})
</script>

<template>
  <div
    class="notification-item"
    :class="isHidingTime && 'notification-item-hide'"
  >
    <div class="notification-item__header">
      <div class="notification-item__header__left">
        <ExclamationCircleOutlined
          class="notification-item__header__left__icon"
        />
        <p class="notification-item__header__left__text">
          Данные не были сохранены!
        </p>
      </div>
      <a-button
        class="notification-item__header__button"
        type="link"
        @click="closeNotification"
      >
        <template #icon>
          <CloseOutlined />
        </template>
      </a-button>
    </div>
    <div class="notification-item__body">
      <p class="notification-item__body__text">
        Проверьте правильность введенных данных.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 24px 24px 16px;
  background-color: $bgCriticalSubdued;
  border-radius: 8px;
  transition: all ease 0.4s;
  animation: fadeUp 0.4s ease;
  pointer-events: all;

  &-hide {
    animation: fadeDown 0.4s ease;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__left {
      display: flex;
      align-items: center;
      gap: 6px;

      &__icon {
        color: $iconCritical;
      }

      &__text {
        font: $fontP8;
        color: $textCritical;
      }
    }

    &__button {
      color: $iconPrimary;

      &:hover {
        color: $iconSecondary;
      }

      &:active {
        color: $iconPrimary;
      }
    }
  }

  &__body {
    display: flex;
    align-items: center;

    &__text {
      font: $fontP8;
    }
  }
}
</style>
