<template>
  <div class="learn-container">
    <WidgetCarousel
      :items="learn.svg"
      :arrows="true"
      :currentItem="0"
    ></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['learn']),
  },
}
</script>

<style>
.learn-container {
  height: 77vh;
}
</style>
