<template>
  <div class="photos-container">
    <div class="photos-items">
      <div
        v-for="(jpg, id) in jpgs"
        :key="id"
        @click="startCarousel(id)"
        class="photos-item"
      >
        <img
          :src="jpg"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jpgs: Array
  },
  methods: {
    startCarousel(id) {
      this.$emit('startCarousel', id)
    }
  }

}
</script>

<style>
.photos-container {
  width: 100%;
  height: 73vh;
  overflow-y: scroll;
}
.photos-items {
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto auto auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
}
.photos-item {
  width: 100px;
  height: auto;
  margin: 3% 5%;
  text-align: center;
}
.photos-item > img {
  width: 100%;
}
</style>