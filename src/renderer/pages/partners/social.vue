<template>
  <div class="">
    <WidgetCarousel :currentItem="0" :arrows="true" :items="social.jpg" :names="social.info.title"></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // data() {
  //   return {
  //     currentItem: 0,
  //     names: [],
  //   }
  // },
  computed: {
    ...mapGetters([
      'social'
    ])
  },
  // watch: {
  //   'currentItem': function () {
  //     console.log(this.profsouz.names[this.currentItem]);
  //     this.cirrentName = this.profsouz.names[this.currentItem]
  //   } 
  // },
  methods: {
    startCarousel(id) {
      this.currentItem = id;
      this.showCarousel = !this.showCarousel
    }
  }
}
</script>

<style>

</style>