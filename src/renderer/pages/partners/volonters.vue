<template>
  <div class="">
    <WidgetPhotos
      v-show="!modal"
      @startCarousel="startCarousel"
      :jpgs="volonters.jpg"
      :ierarhi="false"
    ></WidgetPhotos>
    <ModalPreview
      v-show="modal"
      :currentItem="currentItem"
      :buttonStatus="buttonStatus?'Перейти к галерее фотографий':''"
      :jpgs="buttonStatus?volonters.svg:volonters.jpg"
      :arrows="!buttonStatus"
      @normalizeCarousel="buttonStatus=false"
    ></ModalPreview>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  data() {
    return {
      currentItem: 0,
      buttonStatus: true
    }
  },
  mounted() {
    this.buttonStatus = true;
    this.$store.commit('SWITCH_MODAL')
  },
  // methods: {
  //   normalizeCarousel() {
  //     this.buttonStatus=false
  //   }
  // },
  computed: {
    ...mapGetters([
      'volonters',
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