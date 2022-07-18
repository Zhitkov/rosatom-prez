<template>
  <div class="composition-container">
    <WidgetCarousel
      :items="composition.svg"
      :arrows="true"
      :currentItem="0"
    ></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'composition',
    ]),
  },
  mounted() {
    this.$store.commit('CHANGE_PAGE_STATUS', this.composition.title)
  },

}
</script>

<style>
.composition-container {
  height: 77vh;
}
</style>