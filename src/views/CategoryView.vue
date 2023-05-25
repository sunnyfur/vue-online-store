<template>
  <h1>{{ titleCategory }}</h1>
  <aside>
    <ul>
      <li @click="handleClick()">Все продукты</li>
      <li
        v-for="subCategory in subCategories"
        :key="subCategory.id"
        @click="handleClick(subCategory.slug)"
      >
        {{ subCategory.name }}
      </li>
    </ul>
  </aside>
  <ProductsList :cardList="products" :subSlug="subSlug" />
</template>
<script>
import services from '@/api/services';
import ProductsList from '@/components/ProductsList.vue';
import router from '@/router/router';

export default {
  data() {
    return {
      titleCategory: '',
      subCategories: [],
      products: [],
      subSlug: '',
    };
  },
  props: {
    city_id: {
      type: Number,
      default: 1,
    },
    slug: { type: String, default: '' },
  },
  watch: {
    city_id: function (newId) {
      this.getCategory(newId);
      this.getProducts(newId);
    },
  },
  methods: {
    getCategory(newCity) {
      console.log({ slug: this.slug });
      services
        .getCatalog(newCity)
        .then((response) => {
          const currCategory = response.data.tags.find(
            (category) => category.slug === this.slug
          );
          this.titleCategory = currCategory.name;
          this.subCategories = currCategory.children;
        })
        .catch((err) => console.error(err));
    },
    getProducts(newCity) {
      services.getProducts(newCity, this.slug).then((response) => {
        const products = response.data.products;
        this.products = products;
      });
    },
    handleClick(subCategory) {
      router.push({
        name: 'subSlug',
        params: { subSlug: subCategory },
      });

      this.subSlug = subCategory;
    },
  },
  mounted() {
    this.getCategory(this.city_id);
    this.getProducts(this.city_id);
  },
  components: { ProductsList },
};
</script>
