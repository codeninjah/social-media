import Vue from 'vue'
import Vuex from 'vuex'

import json from '@/assets/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feedList: json.feed
  },
  getters: {
  },
  mutations: {
    addToFeedList(state, data){
      state.feedList.push({"message" : data})
    }
  },
  actions: {
    addToFeedList(context, data){
      context.commit('addToFeedList', data)
    }
  },
  modules: {
  }
})
