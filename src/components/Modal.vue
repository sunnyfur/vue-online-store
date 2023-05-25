<template>
  <div class="modal" v-if="isShow">
    <div class="modal__content">
      <button class="button_close" @click.prevent="closeDialog">
        <img src="@/assets/svg/close.svg" alt="close" />
      </button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalVue',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit('update:isShow', false);
    },
  },
};
</script>
<style>
.modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modal__content {
  margin: auto;
  background-color: white;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 5px;
  position: relative;
  min-width: 769px;
  min-height: 144px;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
}
.button_close {
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
}
.button_close img {
  width: 100%;
  object-fit: contain;
}
.h1 {
  font-size: 44px;
}
@media (max-width: 900px) {
  .modal {
    width: calc(100% - 5px);
  }
}
</style>
