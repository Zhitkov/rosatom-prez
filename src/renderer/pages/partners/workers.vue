<template>
  <div class="">
    <WidgetPhotos
      v-show="!modal"
      @startCarousel="startCarousel"
      :jpgs="workers.jpg"
    ></WidgetPhotos>
    <ModalPreview
      v-show="modal"
      :currentItem="currentItem"
      :jpgs="workers.jpg"
      :arrows="true"
    ></ModalPreview>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentItem: 0,
    }
  },
  mounted() {
    this.$store.commit('CHANGE_PAGE_STATUS', this.workers.title)
  },
  computed: {
    ...mapGetters(['workers', 'modal']),
  },
  methods: {
    startCarousel(id) {
      this.currentItem = id;
      this.showCarousel = !this.showCarousel
    }
  }
}
</script>

<style></style>
