<template>
  <div>
    <div class="control-container back-img flex-center">
      <div class="control-items flex-center">
        <NuxtLink to="/youngs/composition">
          <div
            @click="CHANGE_PAGE_STATUS('Направления деятельности')"
            class="control-item rosatom-menu-button"
          >
            <p class="flex-center">Направления деятельности</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/youngs/direction">
          <div
            @click="CHANGE_PAGE_STATUS('Состав')"
            class="control-item rosatom-menu-button"
          >
          <p class="flex-center">Состав</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'


export default {
  data() {
    return {
      currentItem: 0,
      buttonStatus: true,
      youngStatus: true,
    }
  },
  methods: {
    ...mapMutations(['CHANGE_PAGE_STATUS'])
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