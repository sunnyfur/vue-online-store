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
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap');
body {
  margin: 0;
}
* {
  font-family: 'Futura PT', 'Mulish', Helvetica, Arial, sans-serif;
}
.app {
  font-family: 'Futura PT', 'Mulish', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e5e5e5;
  box-sizing: border-box;
  color: #272727;

  min-height: 100vh;
}
</style>
