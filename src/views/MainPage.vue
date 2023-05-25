<template>
  <h1>Категория товаров</h1>
  <div class="categories">
    <CategoryCard
      v-for="category in categories"
      :key="category.slug"
      :category="category"
      @click="clickCategory(category.slug)"
    />
  </div>
</template>
<script>
import services from '@/api/services';
import CategoryCard from '@/components/CategoryCard.vue';
import router from '@/router/router';
export default {
  name: 'MainPage',
  data() {
    return {
      categories: [],
    };
  },
  props: {
    city_id: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    city_id: function (newId) {
      this.getCatalog(newId);
    },
  },

  methods: {
    getCatalog(newCity) {
      services
        .getCatalog(newCity)
        .then((response) => {
          this.categories = response.data.tags;
        })
        .catch((err) => console.error(err));
    },
    clickCategory(slug) {
      router.push({ name: 'category', params: { slug: slug } });
    },
  },
  mounted() {
    this.getCatalog(this.city_id);
  },
  components: { CategoryCard },
};
</script>
<style>
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}
</style>
