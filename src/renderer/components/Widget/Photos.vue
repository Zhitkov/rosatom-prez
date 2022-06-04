<template>
  <div class="photos-container back-img">
    <div :class="'photos-items' + (ierarhi?' ierarhi':'')">
      <div
        v-for="(jpg, id) in jpgs"
        :key="id"
        class="photos-item"
      >
        <img
          @click="startCarousel(id)"
          :src="jpg"
          alt=""
        >
        <div v-if="names">{{names[id]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    jpgs: Array,
    ierarhi: false,
    names: Array
  },
  methods: {
    ...mapMutations(['SWITCH_MODAL']),
    startCarousel(id) {
      this.$emit('startCarousel', id)
      this.SWITCH_MODAL()
    }
  }

}
</script>

<style>
.photos-container {
  width: 100%;
  height: 77vh;
  overflow-y: scroll;
}
.photos-items {
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
}
.photos-items.ierarhi > .photos-item:nth-child(2) {
  grid-area: 1 / 1 / 1 / 5;
}
.photos-item {
  width: 200px;
  height: auto;
  margin: 3% 5%;
  text-align: center;
}
.photos-item > img {
  width: 100%;
}
</style>