import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
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
    this.loggerService?.Log('AppComponent.ngOnInit');
    this.name.nativeElement.innerText = "hilton hotel";
  }

  constructor(@Optional() private loggerService: LoggerService) {};

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
}
