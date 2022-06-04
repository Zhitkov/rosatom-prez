<template>
  <nav
    v-show="!modal"
    class="navbar"
  >
    <div class="navbar-title">
      <h2 v-show="$route.path === '/'">Работа с персоналом</h2>
      <h2 v-show="$route.path !== '/'">{{pageStatus}}</h2>
      <button
        class="header-button"
        v-show="($route.path !== '/')"
        @click="$router.go(-1)"
      ><p>Назад</p> </button>
        <!-- v-show="($route.path !== '/') && !/\/partners\//.test($route.path) && !/\/youngs\//.test($route.path) && !/\/youngs/.test($route.path)" -->
      <!-- <button
        class="header-button"
        v-show="/\/partners\//.test($route.path) || /\/youngs/.test($route.path)"
        @click="CHANGE_PAGE_STATUS('Социальное партнерство'); $router.push('/partners')"
      ><p>Вернуться в Социальное партнерство </p></button>
      <button
        class="header-button"
        v-show="/\/youngs\//.test($route.path)"
        @click="CHANGE_PAGE_STATUS('Совет молодежи'); $router.push('/youngs')"
      ><p>Вернуться в Совет молодежи</p> -->
       
      <!-- </button> -->
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'myHeader',
  methods: {
    ...mapMutations(['CHANGE_PAGE_STATUS', 'SWITCH_MODAL']),
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
  /* padding: 2vh 0; */
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
.header-button {
  width: auto;
  min-width: 13vw;
  height: 6vh;
  text-decoration: none;
  color: white;
  background-color: #277ec4;
  border: none;
  border-radius: 20px;
  font-size: 14pt;
  font-weight: 400;
}
.header-button > p {
    margin: 0;
    padding: 0vw 3vh;

}
</style>