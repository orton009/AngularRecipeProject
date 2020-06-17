import { Component, OnInit} from '@angular/core';
import { DataStorage } from '../shared/services/dataStorage.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private dataStore : DataStorage , private authService : AuthService) { }

  ngOnInit() {
  }

  onSave(){
    this.dataStore.storeData().subscribe(
      (response) => {
        console.log(response);
      });
  }

  onFetch(){
    this.dataStore.fetchData() ;
  }

  onLogOut(){
    this.authService.signOut();
  }

}
