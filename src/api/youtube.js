import axios from 'axios'

const Key = "AIzaSyDOeKPCL5FLrFjfbWAaMFUCckGD1mllAd0";

export default axios.create({
  
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part: "snippet",
    maxResults: 5,
    key: Key
  },
  
  headers: {}

})