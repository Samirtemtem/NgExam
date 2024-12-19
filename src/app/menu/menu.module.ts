import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMenuComponentComponent } from './add-menu-component/add-menu-component.component';
import { MenuRoutingModule } from './menu-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsumerService } from '../consumer-service.service';

@NgModule({
  declarations: [
    AddMenuComponentComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ConsumerService]
})
export class MenuModule { }