import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});


// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   (error) => {
//     if (error.config.method === "get" && error.config.url === "/login") {
//       return {
//         data: { 
//             id: 1, 
//             username: "ian", 
//             password: "123", 
//             firstname: "ed",
//             lastname: "es",
//             address: "binagonan" 
//         },
//         status: 200,
//         statusText: "OK",
//         headers: {},
//         config: error.config,
//         isMock: true,
//       };
//     }
//   }
// );


export default instance;
