<template>
  <div style="height: 77vh;">
    <WidgetCarousel
      :currentItem="0"
      :arrows="true"
      :items="social.svg"
      :buttonStatus="false"
    ></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['social']),
  },
  mounted() {
    this.$store.commit('CHANGE_PAGE_STATUS', this.social.title)
  },
}
</script>

<style></style>
