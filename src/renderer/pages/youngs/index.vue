<template>
  <div>
    <div class="control-container back-img flex-center">
      <div class="control-items flex-center">
        <NuxtLink to="/youngs/composition">
          <div
            class="control-item rosatom-menu-button"
          >
            <p class="flex-center">СОСТАВ</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/youngs/direction">
          <div
            class="control-item rosatom-menu-button"
          >
          <p class="flex-center">НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  mounted() {
    this.$store.commit('CHANGE_PAGE_STATUS', this.youngs.title)
  },
  computed: {
    ...mapGetters([
      'youngs',
      'modal'
    ])
  },
}

</script>

<style>

</style>