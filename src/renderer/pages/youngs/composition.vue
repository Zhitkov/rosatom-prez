<template>
  <div class="">
    <WidgetCarousel :items="composition.svg" :arrows="false" :currentItem="0"></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'composition',
    ])
  }

}
</script>

<style>

</style>