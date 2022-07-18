<template>
  <div class="photos-container back-img">
    <div :class="'photos-items' + (ierarhi ? ' ierarhi' : '')">
      <div
        v-for="(jpg, id) in jpgs"
        :key="id"
        class="photos-item"
        @click="startCarousel(id)"
        :style="`background-image: url('${jpg}'); height: ${
          ierarhi ? '400px' : '200px'
        }`"
      >
        <div class="info" v-if="names">
          <p class="role">{{ names[id][1] }}</p>
          <p class="name">{{ names[id][0] }}</p>
        </div>
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
    names: Array,
  },
  methods: {
    ...mapMutations(['SWITCH_MODAL']),
    startCarousel(id) {
      this.$emit('startCarousel', id)
      this.SWITCH_MODAL()
    },
  },
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
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
  justify-content: center;
}
.photos-items.ierarhi > .photos-item:nth-child(5) {
  grid-area: 1 / 1 / 1 / 4;
}
.photos-item {
  width: auto;
  max-width: 270px;
  min-width: 400px;
  /* height: 150px; */
  margin: 3% 5%;
  text-align: center;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
}
.photos-item > .info {
  background-color: rgb(0 102 172 / 81%);
  color: white;
  padding: 10px 15px;
  width: 100%;
}
.photos-item > .info > p {
  margin: 0;
}
.photos-item > .info > p.role {
  font-size: 13pt;
}
.photos-item > .info > p.name {
  font-size: 15pt;
}
.photos-item > img {
  width: 100%;
}
</style>
