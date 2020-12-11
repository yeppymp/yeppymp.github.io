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

    <div id="not-responsive-info">
      <p class="text-center">Sorry this website is not responsive yet :(
        <br> For now on please use PC instead,
        <br> I am working very hard to make it responsive soon.</p>
    </div>
  </div>
</template>

<style>
</style>
