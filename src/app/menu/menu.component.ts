import { Component, Input } from '@angular/core';
import { Menu } from '../models/menu.model';
import { ConsumerService } from '../consumer-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  Menu:Menu = new Menu();
reserveMenu(id: number) {
  this._consumerService.get<Menu>(`menus/${id}`).subscribe({
    next: (menu) => {
      this.Menu = menu;
      
      // Add id to reservations array
      if (this.Menu.reservations) {
        this.Menu.reservations.push(id);
      } else {
        this.Menu.reservations = [id];
      }

      // Update menu with new reservations
      this._consumerService.update<Menu>(`menus`, id, this.Menu).subscribe({
        next: (updatedMenu) => {
          this.Menu = updatedMenu;
        },
        error: (err) => {
          console.error('Error updating menu:', err);
        }
      });
    },
    error: (err) => {
      console.error('Error fetching menu:', err);
    }
  });

}
constructor(private _consumerService: ConsumerService) { }
  @Input() title!: string;
  @Input() image!: string;
  @Input() id!: number;
}
