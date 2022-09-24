class user {
    constructor({ id, username, email, phoneNumber, password }) {
      this.id || id;
      this.username = username;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.password = password;
    }
  }
  
  module.exports = user;