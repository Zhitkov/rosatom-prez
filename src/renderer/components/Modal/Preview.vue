<template>
  <div class="preview-container flex-center">
    <div class="preview-items">
      <WidgetCarousel :currentItem="currentItem" :arrows="arrows" :items="jpgs" :names="names"></WidgetCarousel>  
    </div>
    <div class="bottom-close flex-center">
      <button v-if="!buttonStatus" class="preview-button" @click="SWITCH_MODAL()">Закрыть</button>
      <button v-if="buttonStatus" class="preview-button" @click="normalizeCarousel()">{{buttonStatus}}</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    // data() {
    //     return {

    //     }
    // },
  props: {
    arrows: Boolean,
    jpgs: Array,
    currentItem: Number,
    names: Array,
    buttonStatus: String
  },
  methods: {
    ...mapMutations(['SWITCH_MODAL']),
    normalizeCarousel() {
      this.$emit('normalizeCarousel')
      this.SWITCH_MODAL()
    }
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

.preview-button{
  width: 30vw;
  height: 13vh;
  text-decoration: none;
  color: white;
  background-color: #0159a1 ;
  border: none;
  /* border-radius: 20px; */
  font-size: 14pt;
  padding: 1vw 1vh;
  font-weight: 400;
}

.name {
  text-align: center;
}

</style>