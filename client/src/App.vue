<template>
  <div id="app">    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
// step 1 import component yang mau di pake
// step 2 register component yang di import

export default {
  name: 'App'
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
.jumbotron
{
  height: 15rem;
}
</style>
