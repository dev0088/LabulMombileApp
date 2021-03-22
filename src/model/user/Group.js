import User from './User';
import UserType from './UserType';

export default class Group extends User {
  constructor(type, name, relationship, photo, number, members) {
    super(name, photo, null);
    this.type = type ? UserType.GROUP : null;
    this.relationship = relationship;
    this.photo = photo;
    this.number = number;
    this.members = members;
  }
}
