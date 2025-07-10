<script setup lang="ts">
import NotificationItem from '../../modules/NotificationItem/NotificationItem.vue'
import { useNotificationStore } from '../../stores/NotificationStore'

const notificationStore = useNotificationStore()
</script>

<template>
  <ul class="notification-wrapper">
    <li
      v-for="id in notificationStore.notifications"
      :key="id"
      class="notification-wrapper__item"
    >
      <NotificationItem :id="id" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.notification-wrapper {
  display: flex;
  flex-direction: column-reverse;
  pointer-events: none;
  position: fixed;
  align-items: center;
  width: 20%;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 24px 0;
  gap: 4px;

  &__item {
    width: 90%;
  }
}
</style>
