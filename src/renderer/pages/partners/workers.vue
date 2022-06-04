<template>
  <div class="">
    <WidgetPhotos v-show="!modal" @startCarousel="startCarousel" :jpgs="workerPhotos"></WidgetPhotos>
    <ModalPreview v-show="modal" :currentItem="currentItem" :jpgs="workerPhotos" :arrows="true"></ModalPreview>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  data() {
    return {
      currentItem: 0
    }
  },
  computed: {
    ...mapGetters([
      'workerPhotos',
      'modal'
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