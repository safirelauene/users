class LogUser {

  constructor(user, action) {
    this.date = new Date(Date.now()).toLocaleString();
    this.user = user;
    this.action = action ? action : "criado";
  }
}
