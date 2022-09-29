import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

//import { getAllMessages, setToken } from '@/api/index'
//import { LOGIN_URL, REGISTER_URL, MESSAGES_URL } from '@/api/index'
//import { get, post } from '@/api/index'

import json from '@/assets/data.json'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feedList: json.feed,

    //Testar med att hämta en lista
    list : [],
  },
  getters: {
  },
  mutations: {
    addToFeedList(state, data){
      state.feedList.push({"message" : data})
    },

    //Testar emot state.list
    GET_LIST(state, posts) {
      state.list.push(posts)
    }
  },
  actions: {
    addToFeedList(context, data){
      context.commit('addToFeedList', data)
    },

    //Testar emot mutations GET_LIST
    getAllPosts({ commit }) {
      axios
        .get("http://localhost:8080/api/message/all")
        .then((response) => {
          console.log(response.data)
          commit("GET_LIST", response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
