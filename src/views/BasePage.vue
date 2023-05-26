<template>
  <Header v-model:city_id="city_id" @changeCity="handleChangeCity" />
  <main class="container main">
    <router-view v-model:city_id="city_id" />
  </main>
  <Modal v-model:isShow="dialogVisible">
    <FormCity @submit="handleSubmit" />
  </Modal>
</template>

<script>
import FormCity from '@/components/FormCity.vue';
import Header from '@/components/Header.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Header,
    Modal,
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
  box-sizing: border-box;
}
.main {
  padding-bottom: 5rem;
}
.button_common {
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 60.2%);
  border-radius: 24px;
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  position: relative;
  color: white;
  z-index: 0;
  transition: color 0.5s ease-in-out;
  font-size: 18px;
}
.button_common::before {
  content: '';
  position: absolute;
  inset: 3px;
  z-index: -1;
  transform: translate(0, 8px);
  background: linear-gradient(
    270deg,
    rgba(255, 168, 0, 0.6) 0%,
    rgba(255, 111, 0, 0.6) 100%
  );
  filter: blur(10px);
}
.button_common:hover {
  background: #ff6f00;
}
.button_common:disabled,
.button_common[disabled] {
  background: transparent;
  border: 2px solid rgba(151, 151, 151, 0.3);
  color: rgba(39, 39, 39, 0.5);
}
.button_common:disabled::before,
.button_common[disabled]::before {
  content: none;
}
.h1 {
  font-size: 44px;
  line-height: 44px;
  font-weight: 600;
}
@media (max-width: 900px) {
  .h1 {
    font-size: 38px;
  }
}
@media (max-width: 600px) {
  .h1 {
    font-size: 22px;
    line-height: 22px;
  }
}
</style>
