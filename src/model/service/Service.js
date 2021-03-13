export default class Service {
  constructor(user, type, date, location, coverImage, price, discountInfo) {
    this.id = (Date.now() + parseInt(Math.random() * 100000000)).toString();
    this.user = user;
    this.type = type;
    this.date = date;
    this.location = location;
    this.coverImage = coverImage;
    this.price = price;
    this.discountInfo = discountInfo;
  }
}
