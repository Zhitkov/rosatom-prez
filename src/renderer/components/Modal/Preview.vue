<template>
  <div class="preview-container flex-center">
    <div class="preview-items">
      <WidgetCarousel :currentItem="currentItem" :arrows="arrows" :items="jpgs"></WidgetCarousel>  
    </div>
    <div class="bottom-close flex-center">
      <button class="control-item">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         previewShow: true
    //     }
    // },
  props: {
    arrows: Boolean,
    jpgs: Array,
    currentItem: Number
  }
}
</script>

<style>
.preview-container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
    flex-direction: column

}
.preview-items {
  width: 100%;
  height: 80%;
}

.bottom-close {
  background-color: #105ea4;
}

</style>