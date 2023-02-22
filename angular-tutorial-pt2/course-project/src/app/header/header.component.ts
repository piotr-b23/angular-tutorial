import { Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }


  constructor(private dataStorageService: DataStorageService) { }
}
