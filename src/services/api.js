import axios from "axios";

export function apiCall(method, path) {
  return new Promise((resolve, reject) => {
    return axios[method](path)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}
