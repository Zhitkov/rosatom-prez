<template>
  <div>
    <div class="control-container flex-center">
      <div class="control-items flex-center">
        <div @click="CHANGE_PAGE_STATUS('Социальное партнерство')" class="control-item">
          <NuxtLink to="/partners">Социальное партнерство</NuxtLink>
        </div>
        <div @click="CHANGE_PAGE_STATUS('Обучение и развитие')" class="control-item">
          <NuxtLink to="/learn">Обучение и развитие</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapMutations, mapActions } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['CHANGE_PAGE_STATUS']),
  }
}
</script>


<style>
body {
  margin: 0;
}
.control-container {
  height: 73vh;
  background-image: url("~/assets/control/bottom.png");
  background-repeat: no-repeat;
  background-size: auto;
  background-position-y: 70px;
}

.control-items {
  flex-direction: row;
}
.control-item:first-child {
  display: flex;
  height: 100%;
}

.control-item {
  text-decoration: none;
  justify-content: center;
  background-color: #e9e9e9;
  border: 2px solid #1d4d79;
  border-radius: 10px;
}
.control-item > a {
  color: black;
}
</style>