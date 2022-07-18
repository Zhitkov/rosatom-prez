<template>
  <div class="">
    <WidgetPhotos
      v-show="!modal"
      @startCarousel="startCarousel"
      :jpgs="volonters.jpg"
      :ierarhi="false"
    ></WidgetPhotos>
    <ModalPreview
      :arrows="!modalStatus"
      v-show="modal"
      :currentItem="currentItem"
      :modalStatus="modalStatus"
      :jpgs="modalStatus?volonters.svg:volonters.jpg"
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
    if (!this.modal) {
      this.$store.commit('SWITCH_MODAL')
      this.$store.commit('CHANGE_PAGE_STATUS', this.volonters.title)
      this.$store.commit('CHANGE_MODAL_STATUS')
    }
  },
  // methods: {
  //   ...mapMutations(['CHANGE_MODAL_STATUS']),
  // },
  computed: {
    ...mapGetters([
      'volonters',
      'modal',
      'modalStatus'
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