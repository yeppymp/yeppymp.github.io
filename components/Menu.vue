<template>
  <div class="menu d-flex flex-column justify-content-center">
    <b-button
      class="menu-toggle"
      variant="faded"
      @click.prevent="$store.commit('TOGGLE_MENU')"
    >
      <span class="h1"><b-icon icon="x" variant="light" /></span>
    </b-button>

    <b-list-group class="menu-list">
      <b-list-group-item v-for="(m, i) in $store.state.menus" :key="i">
        <nuxt-link :to="m.url">{{ m.name }}</nuxt-link>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>