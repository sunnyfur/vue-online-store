<template>
  <div class="category__card" :style="styles">
    <h3 class="category__title">{{ category.name }}</h3>
  </div>
</template>
<script>
export default {
  name: 'CardView',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        'background-image': `url(${this.category.image})`,
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
      };
    },
  },
};
</script>
<style scoped>
.category__card {
  color: v-bind('category.text_color');
  flex: 1 1 20%;
  box-sizing: border-box;
  cursor: pointer;
  padding: 20px;
  height: 150px;
}
.category__title {
  margin: 0;
}
</style>
