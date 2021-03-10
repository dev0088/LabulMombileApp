import Service from './Service';
import ServiceType from './ServiceType';

export default class OrganizeService extends Service {
  constructor(user, title, organName, date, location) {
    super(user, ServiceType.ORGANIZE, date, location);
    this.title = title;
    this.organName = organName;
  }
}
