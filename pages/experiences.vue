<template>
  <div class="container-custom page d-flex align-items-center" id="experience">
    <div class="col-6"></div>
    <div
      class="col-6 d-flex flex-column align-items-end justify-content-center"
    >
      <h2 class="title primary-bordered-bottom mb-5">Experiences</h2>
      <b-carousel
        background="transaparent"
        img-width="1024"
        img-height="480"
        :interval="0"
        indicators
      >
        <b-carousel-slide
          img-blank
          v-for="(experiences_arr, i) in grouped_experiences"
          :key="i">
          <div class="text-right"
            v-for="(experience, ie) in experiences_arr"
            :key="ie">
            <h4><strong>{{ experience.title }}</strong></h4>
            <p class="mb-0">{{ experience.description }}</p>
            <p class="text-muted"><em>{{ experience.time }}</em></p>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      grouped_experiences: [],
    };
  },
  computed: {
    experiences() {
      return this.$store.state.experiences.list;
    },
  },
  mounted() {
    for (let i = 0; i < this.experiences.length; i++) {
      if ((i + 1) % 2 == 0) continue;
      else {
        if (this.experiences[i+1] === undefined) this.grouped_experiences.push([this.experiences[i]])
        else this.grouped_experiences.push([this.experiences[i], this.experiences[i+1]])
      }
    }
  }
};
</script>

<style></style>
