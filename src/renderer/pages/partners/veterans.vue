<template>
  <div class="back-img">
    <WidgetCarousel :currentItem="0" :arrows="false" :items="veterans.jpg" :names="veterans.info.title"></WidgetCarousel>
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
  // methods: {
    
  // }
}
</script>

<style>

</style>