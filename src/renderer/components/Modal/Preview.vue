<template>
  <div style="align-items: end;" class="preview-container flex-center">
    <div class="preview-items flex-center">
      <WidgetCarousel :currentItem="currentItem" :arrows="arrows" :items="jpgs"  :buttonStatus="true" :names="names"></WidgetCarousel>  
    </div>
    <div class="bottom-close">
      <!-- <button v-if="!buttonStatus" class="preview-button" @click="SWITCH_MODAL()">Закрыть</button> -->
      <button v-if="modalStatus" class="preview-button" @click="SWITCH_MODAL();CHANGE_MODAL_STATUS()">Перейти к галерее фотографий</button>
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
    modalStatus: Boolean
  },
  methods: {
    ...mapMutations(['SWITCH_MODAL', 'CHANGE_MODAL_STATUS']),
    // normalizeCarousel() {
    //   this.$emit('normalizeCarousel')
    //   this.SWITCH_MODAL()
    // }
  }
}
</script>

<style>
.preview-container {
    width: 100vw;
    height: 77vh;
    position: absolute;
    z-index: 1;
    justify-content: flex-end;
    flex-direction: column;
    

}
.preview-items {
  width: 100%;
  height: 100%;
}

.bottom-close {
  position: absolute;
  display: flex;
  justify-content: flex-end;
}

.preview-button{
  width: 19vw;
  margin: 30px;
  height: 13vh;
  text-decoration: none;
  color: white;
  background-color: #006eb3 ;
  border: none;
  border-radius: 30px;
  font-size: 14pt;
  padding: 1vw 1vh;
  font-weight: 400;
}

.name {
  text-align: center;
}

</style>