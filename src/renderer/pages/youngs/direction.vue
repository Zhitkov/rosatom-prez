<template>
  <div class="direction-container">
    <WidgetCarousel
      :items="direction.svg"
      :arrows="false"
      :currentItem="0"
    ></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['direction']),
  },
  mounted() {
    this.$store.commit('CHANGE_PAGE_STATUS', this.direction.title)
  },
}
</script>

<style>
.direction-container {
  height: 77vh;
}
</style>
