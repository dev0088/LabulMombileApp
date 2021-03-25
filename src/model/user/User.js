export default class User {
  constructor(name, photo, relationship, email) {
    this.id = (Date.now() + parseInt(Math.random() * 100000000)).toString();
    this.name = name;
    this.photo = photo;
    this.email = email;
    this.relationship = relationship;
  }
}
