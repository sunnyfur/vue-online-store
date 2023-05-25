<template>
  <ul>
    <li v-for="card in filtredList" :key="card.id">{{ card.present_name }}</li>
  </ul>
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
      console.log({ subSug: subSlug });
      return subSlug
        ? this.cardList.filter((card) =>
            card.tags.find((tag) => tag.slug == subSlug)
          )
        : this.cardList;
    },
  },
};
</script>
