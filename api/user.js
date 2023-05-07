import { Request } from '../helper/http';
import { getStorage } from '../helper/storage';

var request = new Request;

export class UserAPI {

  users() {
    return request.get('users');
  }

  login(email, password) {
    return request.post(`login`, {email, password});
  }

 

  register(fNInput, lNInput, eInput, pInput,) {
    let data = {
      firstname: fNInput,
      lastname: lNInput,
      email: eInput,
      password: pInput,
      
    };
    return request.post('register', data);
  }

  async logout() {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.get(`logout`);
  }

}