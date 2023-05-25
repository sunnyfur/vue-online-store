<template>
  <header class="header">
    <div class="container">
      <button @click="changeCity">{{ city }}</button>
    </div>
  </header>
</template>
<script>
import services from '@/api/services';

export default {
  name: 'HeaderView',
  data() {
    return {
      city: 'Новосибирск',
    };
  },
  props: {
    city_id: { type: Number, default: 1 },
  },
  watch: {
    city_id: function (newId) {
      return this.setCity(newId);
    },
  },
  methods: {
    setCity(newCity) {
      services.getCity(newCity).then((response) => {
        this.city = response.data.data.city;
      });
    },
    changeCity() {
      this.$emit('changeCity');
    },
  },
  mounted() {
    this.setCity(this.city_id);
  },
};
</script>
<style>
.header {
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);
}
</style>
