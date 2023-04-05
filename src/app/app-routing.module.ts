import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTruckComponent } from './add-truck/add-truck.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditTruckComponent } from './edit-truck/edit-truck.component';
import { HomeComponent } from './home/home.component';
import { ViewTruckComponent } from './view-truck/view-truck.component';
import { ViewServicesComponent } from './view-services/view-services.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewTruck/:licensePlate', component: ViewTruckComponent },
  { path: 'AddTruck', component: AddTruckComponent },
  { path: 'EditTruck/:licensePlate', component: EditTruckComponent },
  { path: 'AddService', component: AddServiceComponent },
  { path: 'Services', component: ViewServicesComponent } 
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }