import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer-service.service';
import { Menu } from '../models/menu.model';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit{
addMark() {
  if (this.newmark >= 1 && this.newmark <= 5) {
    if(this.menu.mark==0){
      this.menu.mark = this.newmark;
    }else
    {
    this.menu.mark = (this.newmark+this.menu.mark)/2;
    }
  }
  
  this._consumerService.update<Menu>(`menus/${this.menu.id}`, this.menu.id, this.menu).subscribe({
    next: (menu) => {
      this.menu = menu;
      this.newmark = null;
    },
    error: (err) => {
      console.error('Error updating menu:', err);
    }
  });
}
  menu : Menu = new Menu()
  id : any;
newmark: any;
  constructor(private _consumerService: ConsumerService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this._consumerService.get<Menu>(`menus/${this.id}`).subscribe({
      next: (menu) => {
        this.menu = menu;
      },
      error: (err) => {
        console.error('Error fetching menus:', err);
      }
    });
  }

}
