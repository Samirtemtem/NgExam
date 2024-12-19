import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ReservationRoutingModule } from './reservation-routing.module';

@NgModule({
  declarations: [
    ListReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
