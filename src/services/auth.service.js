class AuthService {
  login(user) {
    let promise = new Promise(function(resolve, reject) { 
      if(user.email == 'admin@canary.co.za' && user.password == 'admin') {
        localStorage.setItem('user', JSON.stringify(user.email));
        return user.email ;
      }
      else {
        reject(Error("User does not exist"));
      }
    });
    promise.then(function(result) {
      return result; 
    }, function(err) {
      console.log(err); 
    });
  
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();