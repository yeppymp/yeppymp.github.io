<template>
  <div>
    <div id="page">
      <Header />

      <MenuIndicator/>

      <transition name="slide-left">
        <Menu v-if="$store.state.isMenuOpen" />
      </transition>

      <transition name="fade">
        <Nuxt />
      </transition>

      <Footer />
    </div>

    <NotResponsiveInfo />
  </div>
</template>

<style>
</style>
