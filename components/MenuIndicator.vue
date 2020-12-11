<template>
  <div class="menu-indicator">
    <b-list-group class="menu-list">
      <b-list-group-item v-for="(m, i) in $store.state.menus" :key="i">
        <nuxt-link :to="m.url" v-b-tooltip.hover.right :title="m.name">
            <div class="indicator"></div>
        </nuxt-link>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>