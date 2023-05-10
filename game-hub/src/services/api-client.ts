import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '653b62ac369b44c9b4f86717f05ad9cc'
  }
})