<template>
  <div class="previw-container">
    <div class="previw-items">
      <div v-show="svgPreview && previewShow" :style="'background-image: ' + svgPreview" class="previw">
          <button @click="previewShow = !previewShow">Перейти к галереи фотографий</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            previewShow: true
        }
    },
  props: {
    jpgs: Array,
    svgPreview: String
  }
}
</script>

<style>
.previw {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
}

</style>