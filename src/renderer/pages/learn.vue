<template>
  <div class="">
    <WidgetCarousel :items="learn.svg" :arrows="true"></WidgetCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'learn',
    ])
  }

}
</script>

<style>

</style>