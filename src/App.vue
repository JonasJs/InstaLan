<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <footer class="container">
      <img id="logo-footer" src="./assets/logo.png">
    </footer>
  </div>

</template>

<script>

import Navigation from '@/components/Navigation';

export default {
  name: 'app',

  components:{
    Navigation
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
  margin: 0;
  padding: 0;
}
#logo-footer{
  margin: 60px auto;
}
</style>
