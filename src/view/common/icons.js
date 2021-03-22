import NeedServiceType from 'model/service/NeedServiceType';
import ServiceType from 'model/service/ServiceType';
import SellService from '../../model/service/SellService';
import SellServiceType from '../../model/service/SellServiceType';
import { ComputerIcon, BricologeIcon, WorkshpIcon } from 'assets/svg/icons/';
import { em, WIDTH } from 'view/common/const';

export const getUserBadge = (type, subType, size = 21 * em) => {
  const badgeSize = { width: size, height: size };

  let userBadge = WorkshpIcon(badgeSize);
  if (type === ServiceType.NEED) {
    if (subType === NeedServiceType.REPAIR) {
      userBadge = BricologeIcon(badgeSize);
    } else if (subType === NeedServiceType.CARPOOL) {
      userBadge = require('assets/images/ic_sample3.png');
    } else if (subType === NeedServiceType.REPAIR_DEVICE) {
      userBadge = ComputerIcon(badgeSize);
    } else if (subType === NeedServiceType.VEGAN_FOOD) {
      userBadge = require('assets/images/ic_sample6.png');
    }
  } else if (type === ServiceType.GIVE) {
    userBadge = require('assets/images/ic_sample_5.png');
  } else if (type === ServiceType.SELL) {
    if (subType === SellServiceType.PLANT) {
      userBadge = require('assets/images/sample_ic_plant.png');
    } else {
      userBadge = require('assets/images/sample_ic_hair.png');
    }
  }
  return userBadge;
};
