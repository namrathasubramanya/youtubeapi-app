import axios from "axios";

const KEY = "AIzaSyB1uElgI8qevCNxQZFLNTUZrdwCepF85xw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
