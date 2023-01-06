import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements DoCheck, OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  constructor(private roomsService: RoomsService) {}

  ngOnDestroy(): void {
    console.log('on destroy is called');
  }

  ngAfterViewChecked(): void {}

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    this.headerChildrenComponent.last.title = 'last title';
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

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

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

    this.roomlist = [...this.roomlist, room];
  }

  ngOnInit():void {
    this.roomlist = this.roomsService.getRooms();
  }
}
