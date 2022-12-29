<template>
  <div class="container-custom page d-flex align-items-center" id="about">
    <div class="col-6"></div>
    <div
      class="col-6 d-flex flex-column align-items-end justify-content-center"
    >
      <h2 class="title primary-bordered-bottom mb-5">About Me</h2>
      <p class="text-right" v-html="about"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: `
        I am <strong>Frontend Developer at <a href="https://www.usetada.com" target="_blank">Tada</a></strong>.
        I was <strong>freelance Front-end Developer & UI Designer</strong> for about 5 years, also was a <strong>Bachelor Computer Science</strong> student and got a chance to become
        <strong>international class students</strong> in Mercu Buana University.<br><br>
        I love <strong>programming and design</strong> since i was in
        high school, started from there i <strong>do exploration, active in some community, and do the freelance projects.</strong>
        Most technology that used are <strong>Laravel, VueJS / NuxtJS and ReactJS with TypeScript.</strong>
      `,
    };
  },
};
</script>

<style></style>
