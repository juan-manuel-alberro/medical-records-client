import request from 'superagent';

class Requests {
  static postRequest() {
    console.log('hola');
  }

  static getRequest(url) {
    return new Promise((resolve, reject) => {
      request.get(url)
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
    });
  }
}

export default Requests;
