<template>
  <Header v-model:city_id="city_id" @changeCity="handleChangeCity" />
  <main class="container">
    <router-view v-model:city_id="city_id" />
  </main>
  <ModalVue v-model:isShow="dialogVisible">
    <FormCity @submit="handleSubmit" />
  </ModalVue>
</template>

<script>
import FormCity from '@/components/FormCity.vue';
import Header from '@/components/Header.vue';
import ModalVue from '@/views/ModalVue.vue';

export default {
  name: 'App',
  components: {
    Header,
    ModalVue,
    FormCity,
  },
  data() {
    return {
      dialogVisible: false,
      city_id: 1,
    };
  },
  methods: {
    handleSubmit(city) {
      this.city_id = city.id;
      this.dialogVisible = false;
      localStorage.setItem('city_id', city.id);
    },
    handleChangeCity() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    const city = localStorage.getItem('city_id');
    this.city_id = +city || 1;
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  padding: 0 25px;
  margin: 0 auto;
}
</style>
