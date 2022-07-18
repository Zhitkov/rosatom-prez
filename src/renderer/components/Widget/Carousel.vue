<template>
  <div class="carousel-container flex-center">
    <!-- :style="`background-image:url('${items[c]}')`" -->
    <div class="arrow right" @click="switcher(-1)" v-show="arrows">
      <img src="@/assets/icons/arrows/left.svg" alt="" />
    </div>
    <div class="carousel-items all-size">
      <img style="height: 90%;" class="all-size" :src="items[c]" alt="" />
      <h2 v-if="names" class="name">
        <template v-if="names[c][1]">
          {{ names[c][1] }}
          <br />
        </template>
        {{ names[c][0] }}
      </h2>
    </div>
    <div @click="switcher(1)" class="arrow left" v-show="arrows">
      <!-- <img class="cross" :style="buttonStatus?'opacity: 1':'opacity: 0'" @click="SWITCH_MODAL()" src="@/assets/icons/cross.svg" alt="" /> -->
      <img src="@/assets/icons/arrows/right.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: function () {
    return {
      c: this.currentItem,
    }
  },
  props: {
    currentItem: Number,
    items: Array,
    arrows: Boolean,
    names: Array,
    buttonStatus: Boolean,
  },
  watch: {
    currentItem: function () {
      this.c = this.currentItem
    },
  },
  methods: {
    ...mapMutations(['SWITCH_MODAL']),
    switcher(c) {
      this.c += c
      if (this.c === -1) {
        this.c = this.items.length - 1
      }
      if (this.c === this.items.length) {
        this.c = 0
      }
    },
  },
}
</script>

<style>
.all-size {
  width: 100%;
  height: 100%;
}
.carousel-container {
  width: 100vw;
  height: 95%;
  flex-direction: row;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: auto 95%;
  background-position: center;
}
.carousel-items {
  /* width: 100%; */
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}
.carousel-items > .name {
  /* position: absolute; */
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(0 102 172 / 100%);
  color: white;
  margin: 0;
  font-size: 23pt;
  width: 100%;
  font-weight: 500;
  /* width: 100%; */
  /* width: 35%; */
  padding: 5px 0;
}
.carousel-items > .name > p {
  margin: 5px;
  font-size: 13pt;
}
.carousel-item {
  width: 100%;
  height: 100%;
}
.carousel-item > img {
  width: 100%;
  height: 95%;
}
.arrow {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 70vh;
  padding-bottom: 7vh;
  /* min-width: 23%; */
}
.arrow > img {
  width: 60%;
}

.arrow.left > img.cross {
  padding: 20px;
}
.arrow.right {
}
</style>
