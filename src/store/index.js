import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: [],
    activeCategory: {},
    loading: false,
    activeMarker: null,
    categories: []
  },
  mutations: {
    setCategoryResultsMutation(state, results) {
      state.results = results;
    },
    setActiveCategoryMutation(state, payload) {
      state.activeMarker = null;
      state.activeCategory = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setActiveMarker(state, payload) {
      state.activeMarker = payload;
    },
    setCategoriesListMutation(state, payload) {
      state.categories = payload;
    }
  },
  actions: {
    async getCategoryResults({commit}, payload) {
      commit('setCategoryResultsMutation', []);
      commit('setActiveCategoryMutation', payload);

      commit('setLoading', true);
      const {data: { businesses }} = await axios.get(`businesses/search?categories=${payload.name}&latitude=52.237022&longitude=21.050440&limit=50&radius=15000&sort_by=best_match`);
      commit('setCategoryResultsMutation', businesses);
      commit('setLoading', false);
    },
    async getCategories({commit}) {
      commit('setLoading', true);

      const {data: { categories }} = await axios.get(`categories`);
      commit('setCategoriesListMutation', categories);

      commit('setLoading', false);
    },
    async getInitialResults({commit}) {
      commit('setLoading', true);

      const {data: { businesses }} = await axios.get(`businesses/search?latitude=52.237022&longitude=21.050440&limit=50&radius=15000&sort_by=best_match`);
      commit('setCategoryResultsMutation', businesses);

      commit('setLoading', false);
    },
    async getQueryResults({commit}, {input, category}) {
      commit('setCategoryResultsMutation', []);
      commit('setLoading', true);

      const {data: { businesses }} = await axios.get(`businesses/search?term=${input}&categories=${category}&latitude=52.237022&longitude=21.050440&limit=50&radius=15000&sort_by=best_match`);

      commit('setCategoryResultsMutation', businesses);
      commit('setLoading', false);
    }
  }
});
