class User {

  constructor(model) {
    this.id = model && model.id ? model.id : undefined;
    this.name = model && model.name ? model.name : undefined;
    this.email = model && model.email ? model.email : undefined;
    this.phone = model && model.phone ? model.phone : undefined;
    this.log = model && model.log ? model.log : [];
  }
}
