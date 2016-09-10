class API {
  constructor() {
    this.config = {
      server: 'http://localhost:3000',
      endpoints: {
        patients: '/api/patients',
        users: '/api/users',
        interviews: '/api/interviews'
      }
    };
  }

  getEndpoint(name = 'patients') {
    return this.config.server + this.config.endpoints[name];
  }
}

export default API;
