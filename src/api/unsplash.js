import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4e8d16d7939616a6f0fa1dea4e60a0ecd3afd18580757af3d666abad263602df"
  }
});
