<template>
  <div class="veterans-container back-img">
    <WidgetCarousel
      :items="veterans.svg"
      :arrows="false"
      :currentItem="0"
    ></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'veterans'
    ])
  },
  mounted() {
    this.$store.commit('CHANGE_PAGE_STATUS', this.veterans.title)
  },
}
</script>

<style>
.veterans-container {
  height: 77vh;
}
</style>