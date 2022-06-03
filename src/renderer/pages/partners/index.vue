<template>
  <div class="partners-container flex-center">
    <div
      v-show="mainMenu"
      class="partners-items"
    >
      <div
        v-for="(partner, index) in partners"
        :key="index"
        class="partners-item"
      >

        <div @click="CHANGE_PAGE_STATUS(partner.title)" class="control-item">
          <NuxtLink :to="'/partners/' + index">{{partner.title}}</NuxtLink>
        </div>
      </div>
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
  height: 73vh;
}
.partners-items {
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto;
  column-gap: 20px;
  row-gap: 20px;
}
.partners-item {
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  background-color: #105ea4;
  border-radius: 7px;
}
</style>