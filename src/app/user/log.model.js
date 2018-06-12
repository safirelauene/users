class Log {

  constructor(model) {
    this.id = model && model.id ? model.id : undefined;
    this.date = model && model.date ? model.date : new Date(Date.now()).toLocaleString();
    this.action = model && model.action ? model.action : "criado";
  }
}
