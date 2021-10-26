import { createStore } from 'vuex';

const store = createStore({
  namespaced: 'home',
  state() {
    return {
      name: 'Postgraduate-Completeness'
    };
  },
  mutations: {},
  actions: {},
  modules: {}
});

export default store;
