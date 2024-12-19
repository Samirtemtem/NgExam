import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer-service.service';
import { Menu } from '../models/menu.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Menus !: Menu[];
  constructor(
  
    private _consumerService: ConsumerService,
   ) {}
    ngOnInit(): void {
      console.log("FETCHNIG FROM DB");
        this._consumerService.get<Menu[]>(`menus`).subscribe({
          next: (menus) => {
            
            this.Menus = [...menus.filter((m) => m.approved == true)]; 

            console.log('After assignment:', this.Menus);
          },
          error: (err) => {
            console.error('Error fetching menus:', err);
          }
        });
        console.log(this.Menus);
        
  }
  

}
