<template>
  <div>
    <p v-if="!cardList.length">Не найдено товаров</p>
    <ul v-else class="products__list">
      <li v-for="card in filtredList" :key="card.id" class="product">
        <img
          :src="card.main_image_thumb_300"
          :alt="card.present_name"
          class="product__image"
        />
        <div>
          <p class="product__category">{{ card.category.name }}</p>
          <h3 class="product__name">{{ card.present_name }}</h3>
          <p class="product__comment">{{ card.comment_name }}</p>
          <p class="product__price">{{ card.price }} ₽</p>
        </div>

        <button
          class="button_common"
          :disabled="!(card.allowed && card.available)"
        >
          {{ card.allowed && card.available ? 'В корзину' : 'Нет в наличии' }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ProductsList',
  props: {
    cardList: { type: Array },
  },

  computed: {
    filtredList() {
      const subSlug = this.$route.params.subSlug;
      return subSlug
        ? this.cardList.filter((card) =>
            card.tags.find((tag) => tag.slug == subSlug)
          )
        : this.cardList;
    },
  },
};
</script>
<style>
.products__list {
  display: flex;
  gap: 24px;
  list-style-type: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
.product {
  margin: 0;
  width: 276px;
  padding-bottom: 23px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  /* flex-direction: column; */
  justify-items: center;
  text-align: center;
  /* align-items: center; */
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 0px 0px 5px 5px;
}

.product__image {
  object-fit: cover;
  width: 100%;
  height: 276px;
}
.product__category {
  color: #979797;
  font-size: 14px;
  margin: 4px;
}
.product__name {
  font-size: 20px;

  margin: 9px;
  line-height: 24px;
}
.product__comment {
  font-size: 16px;
  line-height: 20px;
  margin: 9px;
}
.product__price {
  font-size: 26px;
  line-height: 24px;
  margin: 15px;
  font-weight: 600;
}
.product .button_common {
  width: 212px;
  height: 40px;
}
</style>
