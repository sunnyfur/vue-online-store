<template>
  <div class="category__card" :style="styles">
    <h3 class="category__title">{{ category.name }}</h3>
    <img :src="category.image" />
  </div>
</template>
<script>
export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.category__card {
  color: v-bind('category.text_color');
  flex: 0 1 23%;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
}
.category__card img {
  width: 100%;
  height: 100%;
}
.category__title {
  margin: 20px;
  font-size: 24px;
  position: absolute;
}
@media (max-width: 1330px) {
  .category__card {
    flex: 0 1 30%;
  }
}
@media (max-width: 950px) {
  .category__card {
    flex: 1 1 45%;
    max-width: 48%;
  }
}
@media (max-width: 600px) {
  .category__card {
    width: 100%;
    flex: 1 1 100%;
    height: auto;
    max-width: inherit;
  }
}
</style>
