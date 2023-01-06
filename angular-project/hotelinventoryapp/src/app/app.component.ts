import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr!.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 133;
  // }

  @ViewChild('name',{static: true}) name!: ElementRef;
  title = 'hotelinventoryapp';

  loginTypes = 'Admin';

  ngOnInit(): void {
    this.name.nativeElement.innerText = "hilton hotel";
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
}
