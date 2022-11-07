<template>
  <nav class="navbar">
    <div class="navbar-title">
      <h2 v-show="$route.path === '/'">РАБОТА С ПЕРСОНАЛОМ</h2>
      <h2 v-show="$route.path !== '/'">{{ pageStatus }}</h2>
      <button
        class="header-button"
        v-show="($route.path !== '/')"
        @click="!modal ? $router.go(-1) : allModals()"
      >
        <p>Назад</p>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'myHeader',
  methods: {
    ...mapMutations(['SWITCH_MODAL', 'CHANGE_MODAL_STATUS']),
    allModals() {
      this.SWITCH_MODAL();
      if (this.modalStatus) {
        this.CHANGE_MODAL_STATUS();
        this.$router.go(-1)
      }
    }
  },
  computed: {
    ...mapGetters(['modal', 'pageStatus', 'modalStatus']),
  },
}
</script>

<style>
nav.navbar {
  width: 100vw;
  height: 23vh;
  display: flex;
  justify-content: space-between;
  background-color: #0065ab;
  background-image: url('~/assets/control/top.png');
  background-size: 100vw 100vh;
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
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
nav.navbar > .navbar-title > h2 {
  font-weight: 500;
  color: white;
  font-size: 23pt;
  margin: 0;
}
.header-button {
  width: auto;
  min-width: 13vw;
  height: 6vh;
  text-decoration: none;
  color: white;
  background-color: rgb(255 255 255 / 32%);
  box-shadow: rgb(255 255 255 / 32%) 0px 0px 15px;
  border: none;
  border-radius: 20px;
  font-size: 14pt;
  font-weight: 400;
  margin-top: 10px;
}
.header-button > p {
  margin: 0;
  padding: 0vw 3vh;
  font-size: 20pt;
}
</style>
