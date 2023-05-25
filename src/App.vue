<template>
  <div class="app"><layout-view /></div>
</template>

<script>
import LayoutView from './views/LayoutView.vue';

export default { components: { LayoutView } };
</script>

<style>
body {
  margin: 0;
}
.app {
  font-family: Futura PT, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e5e5e5;
  box-sizing: border-box;
  color: #272727;
  margin-top: 60px;
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  padding: 0 25px;
  margin: 0 auto;
}
</style>
