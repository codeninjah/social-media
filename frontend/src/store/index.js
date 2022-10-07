import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import * as API from "@/api";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list : [],
    user: null,
  },

  getters: {
    getList(state){
      console.log("getList is: " + Object.values(state.list))
      return state.list.filter(post => post.message == post.message)
    },

    getMyList(state){
      return state.list.filter(post => post.user_id == state.user.user_id)
    },

    getUser(state){
      if(state.user != null){
        return state.user.username
      }
    }
  },

  mutations: {
    //Testar emot state.list
    GET_LIST(state, posts) {
      state.list.push(posts)
    },

    SET_USER(state, user) {
      console.log("commit set user: ", user);
      state.user = user;
    },

  },
  actions: {
    addToFeedList(context, data){
      context.commit('addToFeedList', data)
    },

    //Publish posts
    async POST_POST( { commit }, payload) {
      try{
        payload.user_id = this.state.user.user_id
        const res = await axios.post('http://localhost:8080/api/message/createmessage', payload)
        console.log("Post data is: " + res)
        //const token = res.data.token
        if(!res.error){
          //API.setToken(token);
          //commit('SET_USER', res.data)
          commit('GET_LIST', res.data)
        } else {
          throw new Error(res.error)
        }
      } catch (error){
        console.log(error)
      }

    },

    async GET_USER({ commit }) {
      try {
        const res = await API.getUserInfo();
        console.log("get user info res: ", res);
        if (!res.error) {
          commit('SET_USER', res.data);
          //router.push("/getMe");
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
      }
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
      let res = await axios.get("http://localhost:8080/api/message/home")
      console.log("Data is: " + res.data)
      commit('GET_LIST', {posts: res.data})
    },

    async userLogin( {dispatch}, payload ) {
      try{
        const res = await axios.post("http://localhost:8080/api/user/authenticate", payload)
        const token = res.data.token
        console.log("Login res: " + res)
      if (!res.error) {
        API.setToken(token);
        dispatch('GET_USER');
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
     console.log(error)
    }
  },

  //To register an user
    async registerUser( {commit}, payload){
      try{
        const res = await axios.post("http://localhost:8080/api/user/createuser", payload)
        console.log("Data is: " + res)
        const token = res.data.token
        if(!res.error) {
          API.setToken(token);
          commit('SET_USER', res.data);
        } else {
          throw new Error(res.error)
        }
      }
       catch (error) {
        console.log(error)
       }
    }


  },
  modules: {
  }
})
