<template>
  <header class="header">
    <div class="container header__wrapper">
      <button @click="changeCity" class="button_location">
        <img src="@/assets/svg/location.svg" alt="" />{{ city }}
      </button>
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
  height: 72px;
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);
}
.header__wrapper {
  display: flex;
  align-items: center;
  height: 100%;
}
.button_location {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 15px;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
