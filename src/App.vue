<template>
  <div class="app"><BasePage /></div>
</template>

<script>
import BasePage from './views/BasePage.vue';

export default {
  components: { BasePage },
};
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

  min-height: 100vh;
}
</style>
