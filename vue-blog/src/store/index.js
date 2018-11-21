import Vue from 'vue'
import Vuex from 'vuex'
import archiveStore from './archiveStore'
import categoryStore from './categoryStore'
import rightBoxStore from './rightBoxStore'
import tabNavigationStore from './tabNavigationStore'
import tagStore from './tagStore'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // path: 'http://localhost:8000/', //服务器地址
    // url: '' //请求地址
  },
  mutations: {
    // setUrl(state, url) { //设置请求地址

    //     state.url = state.path + url;
    // }
  },
  actions: {

  },
  modules: {
    archiveStore,
    categoryStore,
    rightBoxStore,
    tabNavigationStore,
    tagStore
  }
})
