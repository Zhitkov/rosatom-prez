<template>
  <nav class="navbar">
    <div class="navbar-title">
      <h2 v-show="$route.path === '/'">Страна Росатом</h2>
      <h2 v-show="$route.path !== '/'">{{pageStatus}}</h2>
      <button
        class="control-item"
        v-show="$route.path !== '/' && !modal"
        @click="$router.go(-1)"
      >Назад </button>
      <button
        class="control-item"
        v-show="modal"
        @click="returnBack('Социальное партнерство')"
      >Вернуться в Социальное партнерство </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'myHeader',
  methods: {
    ...mapMutations(['CHANGE_PAGE_STATUS', 'SWITCH_MODAL']),
    returnBack(pageStaus) {
      this.CHANGE_PAGE_STATUS(pageStaus);
      this.SWITCH_MODAL();
    }
  },
  computed: {
    ...mapGetters([
      'modal',
      'modalStatus',
      'pageStatus'
    ])
  }
}
</script>

<style>
nav.navbar {
  width: 100vw;
  height: 23vh;
  display: flex;
  justify-content: space-between;
  padding: 2vh 0;
  background-color: #0065ab;
  background-image: url("~/assets/control/top.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
nav.navbar > .navbar-logo {
  width: 20%;
  height: 100%;
}
nav.navbar > .navbar-logo > img {
  width: 100%;
  height: 100%;
}
nav.navbar > .navbar-title {
  width: 100%;
  text-align: center;
  justify-content: center;
  align-self: center;
}
nav.navbar > .navbar-title > h2 {
  font-weight: 500;
  color: white;
  font-size: 22pt;
}
</style>