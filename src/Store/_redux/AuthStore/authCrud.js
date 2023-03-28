import axios from "axios";
// import {baseUrl} from '../../../data'
//import { _getToken } from '../../../Helper/Helper'

export function questionAdd(data) {
  //   'Authorization': 'Bearer ' +getUserByToken() ,

  var config = {
    method: "post",
    url: "http://20.234.16.80:61171/api/v1/ContactForm/Add",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}
export function userIdentityAction(data) {
  var config = {
    method: "post",
    url: "http://20.234.16.80:61171/api/v1/User/Login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

export function login(data) {
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config);
}
// export function userLog(token, data) {
//   var config = {
//     method: 'post',
//     url: baseUrl + '/auth/login',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: data,
//   }
//   return axios(config)
// }

export function register(data) {
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config);
}

export function getUpdatedUser(id) {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/user/${id}`,
    headers: {
      token: `Bearer ${getUserByToken()}`,
    },
  };
  return axios(config);
}

export function logout() {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/auth/logout`,
  };
  return axios(config);
}

export function getInfos() {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/info/`,
  };
  return axios(config);
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return localStorage.getItem("@authToken");
}
