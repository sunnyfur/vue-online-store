<template>
  <form @submit.prevent class="search__form">
    <div class="search__wrapper">
      <label for="search">Выбор населенного пункта:</label>
      <input
        type="text"
        id="search"
        placeholder="Например, Санкт-Петербург"
        v-model="term"
        @keyup="handleKeyUp"
      />
      <ul v-if="cities.length" class="search__list">
        <li
          v-for="city in cities"
          :key="city.value"
          :value="city.value"
          @click="select(city)"
        >
          {{ city.label }}
        </li>
      </ul>
    </div>
    <button type="submit" @click="$emit('submit', city)">Подтвердить</button>
  </form>
</template>
<script>
import services from '@/api/services';

export default {
  name: 'FormCity',
  data() {
    return {
      cities: [],
      term: '',
      city: {},
    };
  },
  watch: {
    term: function (newTerm) {
      if (newTerm.length >= 3) {
        this.searchCity(newTerm);
      } else {
        this.cities = [];
      }
    },
  },

  methods: {
    searchCity(city) {
      services.getCities(city).then((response) => {
        this.cities = response.data.data;
      });
    },
    handleKeyUp(e) {
      this.term = e.target.value;
    },
    select(city) {
      this.city = city;
      this.term = city.label;
      this.cities = [];
    },
  },
};
</script>
<style scoped>
.search__form {
  display: flex;
  margin: auto;
  width: 100%;
  gap: 1rem;
  align-items: flex-end;
}
.search__wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
}
.search__wrapper input {
  height: 48px;
  border-radius: 5px;
  padding: 12px 18px;
  box-sizing: border-box;
}
.search__list {
  list-style: none;
  height: 144px;
  overflow: auto;
  border: solid black 1px;
  position: absolute;
  top: 50px;
  width: 100%;
}
</style>
