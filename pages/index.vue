<template>
  <div class="container-custom page d-flex align-items-center" id="home">
    <div class="col-6"></div>
    <div class="col-6 d-flex align-items-center justify-content-end">
      <h1
        class="display-3 home-messages text-right primary-bordered-bottom"
        v-html="messages[0]"
      ></h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        "<span class='text-primary-app'>HELLO!</span> MY NAME IS <span class='text-primary-app'>YEPPY</span>",
        "<span class='text-primary-app'>I AM A</span> FRONTEND DEVELOPER",
      ],
      inst: {},
    };
  },
  methods: {
    pollMessages() {
      const first = this.messages.shift();
      this.messages = this.messages.concat(first);
    },
  },
  mounted() {
    window.setInterval(() => {
      this.pollMessages();
    }, 5000);
  },
};
</script>

<style></style>
