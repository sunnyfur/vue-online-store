<template>
  <form @submit.prevent class="search__form">
    <div class="search__wrapper">
      <label for="search" class="search__label"
        >Выбор населенного пункта:</label
      >
      <div class="search__select">
        <input
          class="search__input"
          type="text"
          id="search"
          placeholder="Например, Санкт-Петербург"
          v-model="term"
          @keyup="handleKeyUp"
        />
        <button v-if="term" class="button_close" @click.prevent="clearInput">
          <img src="@/assets/svg/close.svg" alt="close" />
        </button>
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
    </div>
    <button
      type="submit"
      @click.prevent="$emit('submit', city)"
      class="button_common"
    >
      Подтвердить
    </button>
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
    clearInput() {
      this.term = '';
      this.cities = [];
    },
    select(city) {
      this.city = city;
      this.term = city.label;
      this.cities = [];
    },
  },
};
</script>
<style>
.search__form {
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: flex-end;
  padding-bottom: 1rem;
}

.search__form .button_common {
  width: 174px;
  height: 48px;
  text-transform: uppercase;

  font-size: 16px;
  letter-spacing: 1.75px;
}

.search__wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  align-self: flex-start;
}

.search__label {
  font-size: 20px;
  font-weight: 600;
  margin: 12px 0;
}
.search__select {
  width: 100%;
  background-color: white;
  border: 1px solid rgba(151, 151, 151, 0.5);
  overflow: hidden;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
}
.search__select .search__input {
  height: 48px;
  width: 100%;
  border: 0;
  outline: none;
  position: relative;
  padding: 12px 30px 12px 12px;
  box-sizing: border-box;
  word-break: break-all;
}
.search__select .button_close {
  width: 12px;
  height: 12px;
}
.search__list {
  list-style: none;
  height: 172px;
  overflow: auto;

  padding: 12px 0 0 0;
  margin: 0 12px 12px 12px;
  border-top: 2px solid rgba(151, 151, 151, 0.3);
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.search__list li {
  cursor: pointer;
  color: #979797;
}
.search__list li:hover {
  cursor: pointer;
  color: initial;
}
.search__list::-webkit-scrollbar {
  width: 7px;
}

.search__list::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(151, 151, 151, 0.3);
}
@media (max-width: 600px) {
  .search__form {
    flex-direction: column;
  }
  .search__wrapper {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .search__label {
    font-size: 14px;
  }
  .search__select {
    transform: none;
    position: relative;
  }
  .search__select .search__input {
    padding: 5px 35px 5px 5px;
  }
  .search__list {
    font-size: 14px;
  }
  .search__form .button_common {
    width: 100%;
    height: inherit;
    font-size: 12px;
  }
}
</style>
