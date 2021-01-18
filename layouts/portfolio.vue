<template>
  <div>
    <div id="page">
      <Header class="bg-primary" />

      <transition name="slide-left">
        <Menu v-if="$store.state.isMenuOpen" />
      </transition>

      <transition name="fade">
        <Nuxt />
      </transition>
    </div>

    <NotResponsiveInfo />
  </div>
</template>

<style>
</style>
