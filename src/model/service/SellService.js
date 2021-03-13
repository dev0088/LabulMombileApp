import Service from './Service';
import ServiceType from './ServiceType';

export default class SellService extends Service {
  constructor(title, slogan, comment, date, coverImage, location, subType, price, discountInfo) {
    super(null, ServiceType.SELL, date, location, coverImage, price, discountInfo);
    this.title = title;
    this.slogan = slogan;
    this.comment = comment;
    this.subType = subType;
  }
}
