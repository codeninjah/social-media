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
    getList(state){
      console.log("getList is: " + Object.values(state.list))
      return state.list.filter(post => post.message == post.message)
    }
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
    /*
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
    },
    */
    async getAllPosts({ commit }) {
      const req = await fetch("http://localhost:8080/api/message/all")
      const res = await req.json()
      commit("GET_LIST", res)
    },

    async getPosts({ commit }) {
      let res = await axios.get("http://localhost:8080/api/message/all")
      console.log("Data is: " + res.data)
      commit('GET_LIST', {posts: res.data})
    }

  },
  modules: {
  }
})
