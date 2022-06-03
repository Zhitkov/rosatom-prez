<template>
  <div class="">
    <WidgetPhotos :jpgs="workerPhotos"></WidgetPhotos>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'workerPhotos'
    ])
  }
}
</script>

<style>

</style>