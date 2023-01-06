import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements DoCheck, OnInit, AfterViewInit, AfterViewChecked {
  
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "last title";
  }
  ngDoCheck(): void {
    console.log('on changes is called');
  }

  hotelName = 'Hilton Hotel.';
  numberOfRooms = 100;
  hideRooms = false;
  title = 'New title. WOW.';

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 15,
  };

  roomlist: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  toggle() {
    this.hideRooms = !this.hideRooms;

    this.title = 'Even newer title. WOW WOW.';
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomType: 'Premium Room Super',
      amenities: 'Tv, Kitchen',
      price: 12500,
      photos: 'http://ttt.com/400/200/sports/',
      checkinTime: new Date('11-JUL-2019'),
    };

    //this.roomlist.push(room);
    this.roomlist = [...this.roomlist, room];
  }

  ngOnInit() {
   // console.log(this.headerComponent);
    this.roomlist = [
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
  }
}
