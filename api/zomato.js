import axios from'axios'

export default axios.create({
 
    baseURL: 'https://developers.zomato.com/api/v2.1',
 headers:{
     'user-key': '12ceb61da4917fd7295cc0074fe7cfef'
 }

})