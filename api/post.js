import { Request } from '../helper/http';
import { getStorage, setStorage } from '../helper/storage';

var request = new Request;

export class PostApi {
    async posts() {
      const user = await getStorage('user');
      console.log("token", user.token)
      request = new Request(user.token);
  
      return request.get(`posts`);
    }
  
    async createPost(cont){
      const user = await getStorage('user')
      request = new Request(user.token)
    
  
      return request.post(`post`, cont)
  
    }
  
  
  }