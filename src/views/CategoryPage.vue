<template>
  <div v-if="isLoadingCards || isLoadingCategories">Идет загрузка..</div>
  <div v-else>
    <div class="category-page__title">
      <router-link :to="{ name: 'main' }"
        ><img src="@/assets/svg/arrow.svg"
      /></router-link>
      <h1 class="h1">{{ titleCategory }}</h1>
    </div>

    <div class="category-page__page">
      <aside>
        <ul class="subCategories">
          <li
            @click="handleClick()"
            class="subCategory"
            :class="`${!subSlug ? 'active' : ''}`"
          >
            Все продукты
          </li>
          <li
            v-for="subCategory in subCategories"
            :key="subCategory.id"
            @click="handleClick(subCategory.slug)"
            class="subCategory"
            :class="`${subCategory.slug === subSlug ? 'active' : ''}`"
          >
            {{ subCategory.name }}
          </li>
        </ul>
      </aside>
      <ProductsList :cardList="products" />
    </div>
  </div>
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
      isLoadingCards: false,
      isLoadingCategories: false,
    };
  },
  props: {
    city_id: {
      type: Number,
      default: 1,
    },
    slug: { type: String, default: '' },
    subSlug: { type: String, default: '' },
  },
  watch: {
    city_id: function (newId) {
      this.getCategory(newId);
      this.getProducts(newId);
    },
  },
  methods: {
    getCategory(newCity) {
      this.isLoadingCategories = true;
      services
        .getCatalog(newCity)
        .then((response) => {
          const currCategory = response.data.tags.find(
            (category) => category.slug === this.slug
          );
          this.titleCategory = currCategory.name;
          this.subCategories = currCategory.children;
        })
        .catch((err) => console.error(err))
        .finally(() => (this.isLoadingCategories = false));
    },
    getProducts(newCity) {
      this.isLoadingCards = false;
      services
        .getProducts(newCity, this.slug)
        .then((response) => {
          const products = response.data.products;
          this.products = products;
        })
        .catch((err) => console.error(err))
        .finally(() => (this.isLoadingCards = false));
    },
    handleClick(subCategory) {
      router.push({
        name: 'subSlug',
        params: { subSlug: subCategory },
      });
    },
  },
  mounted() {
    this.getCategory(this.city_id);
    this.getProducts(this.city_id);
  },
  components: { ProductsList },
};
</script>
<style>
.category-page__title {
  display: flex;
  gap: 10px;
  align-items: center;
}

.category-page__page {
  display: flex;

  gap: 34px;
}
.category-page__title a {
  display: flex;
}
.category-page__title img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin: auto;
}

.subCategories {
  min-width: 240px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
@media (max-width: 900px) {
  .category-page__page {
    flex-wrap: wrap;
  }
  .subCategories {
    width: 100%;
  }
}
.subCategories .active {
  background-color: #e9eef3;
}
.subCategory {
  margin: 0;
  cursor: pointer;
  border-bottom: #e9eef3 solid 1px;
  min-height: 40px;
  box-sizing: border-box;
  padding: 8px 12px;
}
.subCategory:hover {
  background-color: #e9eef3;
}
.button_back {
  border: none;
  background: transparent;
  width: 30px;
  height: 30px;
}
</style>
