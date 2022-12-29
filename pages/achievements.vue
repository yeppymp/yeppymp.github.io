<template>
  <div class="container-custom page d-flex align-items-center" id="achievement">
    <div class="col-6"></div>
    <div
      class="col-6 d-flex flex-column align-items-end justify-content-center"
    >
      <h2 class="title primary-bordered-bottom mb-5">Achievements</h2>
      <b-carousel
        background="transaparent"
        img-width="1024"
        img-height="480"
        :interval="0"
        indicators
      >
        <b-carousel-slide
          img-blank
          v-for="(achievements_arr, i) in grouped_achievements"
          :key="i">
          <div class="text-right"
            v-for="(achievement, ie) in achievements_arr"
            :key="ie">
            <h4><strong>{{ achievement.title }}</strong></h4>
            <p class="mb-0">{{ achievement.description }}</p>
            <p class="text-muted"><em>{{ achievement.position }}</em></p>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grouped_achievements: [],
    };
  },
  computed: {
    achievements() {
      return this.$store.state.achievements.list;
    },
  },
  mounted() {
    for (let i = 0; i < this.achievements.length; i++) {
      if ((i + 1) % 2 == 0) continue;
      else {
        if (this.achievements[i+1] === undefined) this.grouped_achievements.push([this.achievements[i]])
        else this.grouped_achievements.push([this.achievements[i], this.achievements[i+1]])
      }
    }
  }
};
</script>

<style></style>
