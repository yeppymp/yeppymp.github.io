<template>
  <b-navbar toggleable fixed="top" variant="faded" type="light" class="header">
    <div class="container-custom">
      <b-navbar-brand href="/">
        <img src="~/assets/images/logo.png" alt="Logo" height="48" />
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item
          class="menu-toggle"
          @click.prevent="$store.commit('TOGGLE_MENU')"
        >
          <b-icon-list />
        </b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>