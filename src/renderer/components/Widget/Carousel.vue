<template>
  <div
    class="carousel-container flex-center"
    :style="`background-image:url('${items[c]}')`"
  >
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
    <div
      v-if="names"
      class="carousel-items"
    >
      <h2
        class="name"
        v-html="names[c]"
      ></h2>
      <!-- <div
        v-show="c === index"
        class="carousel-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <img
          :src="item"
          alt=""
        >
      </div> -->
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
    arrows: Boolean,
    names: Array
  },
  watch: {
    'currentItem': function () {
      this.c = this.currentItem;
    }
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
  height: 77vh;
  flex-direction: row;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: auto 77vh;
  background-position: center;
}
.carousel-items {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.carousel-items > .name {
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: rgb(0 102 172 / 81%);
  color: white;
  margin: 0;
  font-size: 16pt;
  font-weight: 500;
  width: 100%;
  padding: 20px;
  flex-direction: column;
}
.carousel-items > .name > p {
  margin: 5px;
  font-size: 12pt;
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
  align-items: center;
  height: 100%;
  min-width: 23%;
}
/* .arrow.left {
  
}
.arrow.right {
  
} */
</style>