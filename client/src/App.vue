<template>
  <div id="app">
    <navbar></navbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view :blog="blog"/>
  </div>
</template>

<script>
// step 1 import component yang mau di pake
// step 2 register component yang di import
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      blog: [{
        id: 1,
        title: "Here's your title",
        content: 'DESC',
        comment: 'COMMENT'
      }, {
        id: 2,
        title: "Here's other title",
        content: 'OTHER DESC',
        comment: 'OTHER COMMENT'
      }, {
        id: 3,
        title: "Here's other than other title",
        content: 'OTHER DESC',
        comment: 'OTHER OTHER COMMENT'
      }],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
