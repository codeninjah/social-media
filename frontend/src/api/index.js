import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/';

const REGISTER_URL = `${BASE_URL}user/createuser`;
const LOGIN_URL = `${BASE_URL}user/authenticate`;

//const USER_URL = `${BASE_URL}me/`;

const MESSAGES_URL = `${BASE_URL}message/all`;

export {LOGIN_URL, REGISTER_URL, MESSAGES_URL};

const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export async function getAllMessages(token) {
  try {
    const response = await MESSAGES_URL.get('/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (e) {
    return false
  }
}


const get = async (url) => {
  try {
    const response = await axios.get(url);
    
    const data = response.data;
    return data;

  } catch (error) {
    console.log(error)
  }
}

//Get the logged in user's all messages
export async function getAllMine(token) {
    try {
      const response = await MESSAGES_URL.get('/home', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      return response.data
    } catch (e) {
      console.log(e.message)
      return false
    }
  }

  

    
  const post = async (url, obj) => {
    try {
      const token = await axios.post(url, obj);
      console.log(token.data.token)
      return token;
  
    } catch (error) {
      console.log(error)
    }
  }

  export const getUserInfo = async () => await axios.get(`${BASE_URL}user/getme`);

  export const createUserInfo = async (userData) => await axios.post(`${BASE_URL}user/createuser`, userData);



  

  export { setToken }; 
  export { get, post };