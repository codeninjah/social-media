/*
import axios from 'axios'

export default {
    state: {
        lists: [],
    },
    getters: {
        LISTS: state => {
            return state.lists;
        }
    },
    mutations: {
        SET_LISTS: (state, payload) => {
            state.lists = payload;
        }
    },
    actions: {
        GET_LISTS:  async ({commit}) => {
            let {data} = await axios.get('lists')
            console.log(data)
            commit("SET_LISTS", data)
        }
    }
}
*/