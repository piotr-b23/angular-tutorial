import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomlist: RoomList[] = [
    {
      roomType: 'Deluxe Room',
      amenities: 'Tv, Kitchen',
      price: 500,
      photos: 'http://ttt.com/400/200/sports/',
      checkinTime: new Date('11-JUL-2019'),
    },
    {
      roomType: 'Premium Room',
      amenities: 'Tv, Kitchen',
      price: 1500,
      photos: 'http://ttt.com/400/200/sports/',
      checkinTime: new Date('11-JUL-2019'),
    },
    {
      roomType: 'Premium Room',
      amenities: 'Tv, Kitchen',
      price: 2500,
      photos: 'http://ttt.com/400/200/sports/',
      checkinTime: new Date('11-JUL-2019'),
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log("Room service Initilized....")
  }

  getRooms() {
    return this.roomlist;
  }


}
