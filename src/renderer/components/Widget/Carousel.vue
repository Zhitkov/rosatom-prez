<template>
  <div>
    <div class="carousel-container">
      <div
        @click="switcher(1)"
        class="arrow-right"
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
        class="arrow-left"
        v-show="arrows"
      >
        <img
          src="@/assets/icons/arrows/right.svg"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      c: 0
    }
  },
  props: {
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
</style>