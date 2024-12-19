import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AddMenuComponentComponent } from './menu/add-menu-component/add-menu-component.component';
import { ReservationModule } from './reservation/reservation.module';
import { ListReservationsComponent } from './reservation/list-reservations/list-reservations.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'reservations', 
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
  },
  {path: 'menu', 
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {path: 'add-menu', component: AddMenuComponentComponent},
  {
    path: 'details/:id',
    component: MenuDetailsComponent  
  },
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
