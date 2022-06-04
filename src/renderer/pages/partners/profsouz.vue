<template>
  <div class="">
    <WidgetPhotos
      v-show="!modal"
      @startCarousel="startCarousel"
      :jpgs="profsouz.jpg"
      :names="profsouz.names"
      :ierarhi="true"
    ></WidgetPhotos>
    <ModalPreview
      :names="profsouz.names"
      v-show="modal"
      :currentItem="currentItem"
      :jpgs="profsouz.jpg"
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
      names: [],
    }
  },
  computed: {
    ...mapGetters([
      'profsouz',
      'modal'
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