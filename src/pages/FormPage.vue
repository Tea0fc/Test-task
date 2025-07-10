<script setup lang="ts">
import FormWrapper from '../components/FormWrapper/FormWrapper.vue'
import NotificationList from '../components/NotificationList/NotificationList.vue'
</script>

<template>
  <main class="content">
    <FormWrapper />
  </main>
  <NotificationList />
</template>

<style lang="scss" scoped>
.content {
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  width: 1280px;
}
</style>
