<template>
  <div class="">
    <WidgetCarousel :items="direction.svg" :arrows="false" :currentItem="0"></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'direction',
    ])
  }

}
</script>

<style>

</style>