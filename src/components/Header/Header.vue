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
  border-radius: 0 0 16px 16px;

  &__logo {
    height: 100%;
    border-radius: 0 0 0px 16px;
  }
}
</style>
