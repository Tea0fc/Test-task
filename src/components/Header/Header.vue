<script setup lang="ts"></script>

<template>
  <header class="header">
    <img class="header__logo" src="@/assets/logo.svg" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100%;
  background-color: $bgAccentSubdued;
  display: flex;
  align-items: center;

  &__logo {
    height: 100%;
  }
}
</style>
