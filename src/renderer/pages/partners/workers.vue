<template>
  <div class="">
    {{currentItem}}
    <WidgetPhotos @startCarousel="startCarousel" :jpgs="workerPhotos"></WidgetPhotos>
    <ModalPreview :currentItem="currentItem" v-show="showCarousel" :jpgs="workerPhotos" :arrows="true"></ModalPreview>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  data() {
    return {
      showCarousel: false,
      currentItem: Number
    }
  },
  computed: {
    ...mapGetters([
      'workerPhotos'
    ])
  },
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