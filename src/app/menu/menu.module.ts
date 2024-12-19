import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddMenuComponentComponent } from './add-menu-component/add-menu-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, AddMenuComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }