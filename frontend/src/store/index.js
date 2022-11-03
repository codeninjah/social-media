import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as API from "@/api";
import router from '@/router';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list : [],
    user: null,
    myList: [],
    users: [],
    postUser: null
  },

  getters: {
    getList(state){
      console.log("getList is: " + Object.values(state.list))
      return state.list.filter(post => post.message == post.message)
    },

    getUserByPostId(state){
      return state.list.filter((post) => {post.user_id == state.user.user_id;
         return state.user.username})
    },

    
    getMyPosts(state){
      if(state.user != null){
        console.log("Mylist is: " + state.myList)
        return state.myList
      }
    },

    getUsers(state){
      return state.users
    },
    
    getUsersByPost(state){
      return state.users.filter((user) => {user.user_id == state.list.user_id;
        return state.users.username})
    },

    getUser(state){
      if(state.user != null){
        return state.user.username
      }
    },

    getUserId(state){
      if(state.user != null){
        return state.user.user_id
      }
    },
  },

  mutations: {
    //Testar emot state.list
    GET_LIST(state, posts) {
      state.list = []
      state.list.push(posts)
    },


    GET_MY_LIST(state, posts){
      state.myList = []
      state.myList.push(posts)
    },

    SET_USER(state, user) {
      console.log("commit set user: ", user);
      state.user = user;
      localStorage.setItem("user", user)
    },

    LOGG_OFF(state) {
      state.user = null
      console.log("Log off user: " + state.user)
    },

    GET_ALL_USERS(state, userList){
      state.users = []
      state.users.push(userList)
    },

    GET_USER_BY_POST(state, payload){
      state.postUser = payload
      console.log("User is " + state.postUser)
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

    async getPosts({ commit }, user_id) {
      //const token = payload.data.token
      const res = await API.getAllMine(user_id)
      console.log("Data is: " + res)
      commit('GET_MY_LIST', res)
    },

    async getAllUsers( { commit }){
      const req = await fetch('http://localhost:8000/api/user/all')
      const res = await req.json()
      commit("GET_ALL_USERS", res)
    },

    async getPostUser( { commit }, payload ){
      const req = await fetch('http://localhost:8000/api/user/:id', payload)
      const res = await req.json()
      commit("GET_USER_BY_POST", res)
    },

    clearLocalStorage({ commit }){
        localStorage.removeItem("user")
        commit('LOGG_OFF')
        router.push('/account')
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
