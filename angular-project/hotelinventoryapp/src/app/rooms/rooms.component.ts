import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel.';
  numberOfRooms = 100;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 15,
  };

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

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
