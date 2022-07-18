<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import appHeader from '@/components/myHeader'

export default {
  components: { appHeader }
}
</script>

<style>
body {
  margin: 0 !important;
}

a{
  text-decoration: none;
}

.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
#__layout {
  height: 100vh;
  width: 100vw;
}
#__nuxt {
  height: 100vh;
  width: 100vw;
}

@font-face {
    font-family: "Open Sans";
    src: local("Open Sans"),     url(~/assets/OpenSans-VariableFont_wdth\,wght.ttf) format("truetype");}

html {
    font-family: "Open Sans";
}



/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #006eb3;
  border-radius: 50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
