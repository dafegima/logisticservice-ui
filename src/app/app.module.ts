import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTruckComponent } from './add-truck/add-truck.component';
import { EditTruckComponent } from './edit-truck/edit-truck.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddServiceComponent } from './add-service/add-service.component';
import { ViewServicesComponent } from './view-services/view-services.component';
import { LocationViewerComponent } from './location-viewer/location-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTruckComponent,
    EditTruckComponent,
    AddServiceComponent,
    ViewServicesComponent,
    LocationViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
