<template>
  <div style="height: 77vh;">
    <div class="control-container back-img flex-center">
      <div class="control-items flex-center">
        <NuxtLink to="/partners">
          <div
            @click="CHANGE_PAGE_STATUS('Социальное партнерство')"
            class="control-item rosatom-menu-button"
          >
            <p class="flex-center">Социальное партнерство</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/learn">
          <div
            @click="CHANGE_PAGE_STATUS('Обучение и развитие')"
            class="control-item rosatom-menu-button"
          >
            <p class="flex-center">Обучение и развитие</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['CHANGE_PAGE_STATUS']),
  },
}
</script>

<style>
body {
  margin: 0;
}
.back-img {
  background-image: url('~/assets/control/bottom.png');
  background-repeat: no-repeat;
  background-size: 100% 70%;
  background-position: bottom;
}
.control-container {
  height: 77vh;
}

.control-items {
  flex-direction: row;
}
.control-items > a > .rosatom-menu-button {
  text-align: center;
  margin: 5vw 5vh;
  padding: 3vh 3vw;
  width: 30vw;
  height: 25vh;
  display: flex;
  font-size: 25pt;
  background-color: #006eb3;
  color: white;
}

.control-item {
  text-decoration: none;
  justify-content: center;
  background-color: #e9e9e9;
  border: 2px solid #006eb3;
  border-radius: 50px;
}
.control-item > a {
  color: white;
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: center;
}
</style>
