<template>
  <div class="carousel-container flex-center">
    <div
      class="arrow right"
      @click="switcher(1)"
      v-show="arrows"
    >
      <img
        src="@/assets/icons/arrows/left.svg"
        alt=""
      >
    </div>
    <div class="carousel-items">
      <div
        v-show="c === index"
        class="carousel-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <img
          :src="item"
          alt=""
        >
      </div>
    </div>
    <div
      @click="switcher(-1)"
      class="arrow left"
      v-show="arrows"
    >
      <img
        src="@/assets/icons/arrows/right.svg"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      c: this.currentItem
    }
  },
  props: {
    currentItem: Number,
    items: Array,
    arrows: Boolean
  },
  methods: {
    switcher(c) {
      this.c += c
      if (this.c === -1) {
        this.c = this.items.length - 1;
      }
      if (this.c === this.items.length) {
        this.c = 0
      }
    }
  }
}
</script>

<style>
.carousel-container {
  width: 100vw;
  height: 73vh;
  flex-direction: row;
}
.carousel-items {
  width: 100%;
  height: 100%;
}
.carousel-item {
  width: 100%;
  height: 100%;
}
.carousel-item > img {
  width: 100%;
  height: 100%;
}
.arrow {
  position: absolute;
  z-index: 99;
}
.arrow.left {
  left: 91vw;
  height: 73%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff7a;
  top: 27vh;
}
.arrow.right {
  left: 0%;
  height: 73%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff7a;
  top: 27vh;
}
</style>