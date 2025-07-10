<script setup lang="ts">
import Footer from '@/components/Footer/Footer.vue'
import FormWrapper from '@/components/FormWrapper/FormWrapper.vue'
import Header from '@/components/Header/Header.vue'
import NotificationList from '@/components/NotificationList/NotificationList.vue'
</script>

<template>
  <Header />
  <main class="content">
    <FormWrapper />
  </main>
  <Footer />
  <NotificationList />
</template>

<style lang="scss" scoped>
.content {
  justify-content: center;
  align-items: center;
  height: calc(100vh - 250px);
  width: 1280px;
}
</style>
