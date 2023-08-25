import axios from 'axios';  

export default axios.create({ 
  baseURL: "https://mse-bk.onrender.com/api", //for production mode 
  // baseURL: "http://localhost:8000/api", //for developement mode  
});
