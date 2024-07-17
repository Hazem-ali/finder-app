import axios from "axios";
// null is that we don't want to intercept successful responses
axios.interceptors.response.use(null, (error) => {
  // called before the catch block
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
  }
  console.log(error.response.data[0])
  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
