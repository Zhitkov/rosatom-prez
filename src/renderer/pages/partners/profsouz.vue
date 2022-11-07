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
    }
  },
  mounted() {
    this.$store.commit('CHANGE_PAGE_STATUS', this.profsouz.title)
    if (this.modal) {
      this.$store.commit('SWITCH_MODAL')
    }
  },
  computed: {
    ...mapGetters([
      'profsouz',
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