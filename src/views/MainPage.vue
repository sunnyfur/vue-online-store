<template>
  <h1 class="h1">Категория товаров</h1>
  <div v-if="isLoading">Идет загрузка..</div>
  <div v-else class="categories">
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
  data() {
    return {
      categories: [],
      isLoading: false,
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
      this.isLoading = true;
      services
        .getCatalog(newCity)
        .then((response) => {
          this.categories = response.data.tags;
        })
        .catch((err) => console.error(err))
        .finally(() => (this.isLoading = false));
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
  justify-content: space-between;
}
</style>
