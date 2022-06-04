<template>
  <div class="partners-container back-img  flex-center">
    <div
      v-show="mainMenu"
      class="partners-items"
    >
      <NuxtLink
        class="partners-item"
        :to="index==='youngs'?'/youngs':'/partners/' + index"
        v-for="(partner, index) in partners"
        :key="index"
      >
        <div class="partner-button">
          <div @click="CHANGE_PAGE_STATUS(partner.title)">
            {{partner.title}}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'


export default {
  data() {
    return {
      mainMenu: true
    }
  },
  methods: {
    ...mapMutations(['CHANGE_MODAL_STATUS', 'CHANGE_PAGE_STATUS', 'SWITCH_MODAL']),
    switchModal(modalStatus, pageStatus) {
      this.SWITCH_MODAL();
      this.CHANGE_MODAL_STATUS(modalStatus);
      this.CHANGE_PAGE_STATUS(pageStatus)
    }
  },
  computed: {
    ...mapGetters([
      'partners',
      'modal',
      'modalStatus'
    ])
  }

}
</script>

<style>
.partners-container {
  width: 100%;
  height: 77vh;
}
.partners-items {
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto;
  column-gap: 10vw;
  row-gap: 6vh;
}
.partners-item {
  width: 30vw;
  height: 15vh;
  color: white;
  text-align: center;
  background-color: #105ea4;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.partner-button {
  text-decoration: none;
  color: white;
  background-color: #105ea4;
  font-size: 15pt;
}
</style>