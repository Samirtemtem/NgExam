import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponentComponent } from './add-menu-component/add-menu-component.component';

const routes: Routes = [
  {
    path: '',
    component: AddMenuComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { } 