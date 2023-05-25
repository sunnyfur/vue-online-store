import api from './api';

class Services {
  getCatalog(city_id = 1) {
    return api.get('/menutags', { params: { city_id: city_id } });
  }
  getCity(city_id = 1) {
    return api.get('/city', { params: { id: city_id } });
  }
  getCities(term, country = 'ru') {
    return api.get('/city', { params: { term: term, country: country } });
  }
  getCategories(city_id = 1) {
    return api.get('/menutags', { params: { city_id: city_id } });
  }
  getProducts(city_id = 1, slug) {
    return api.get(`/menutags/${slug}`, { params: { city_id: city_id } });
  }
}

export default new Services();
