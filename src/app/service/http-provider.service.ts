import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:5255/";

var httpLink = {
  getAllTrucks: apiUrl + "api/trucks",
  deleteTruckById: apiUrl + "api/trucks",
  getTruckDetailById: apiUrl + "api/trucks",
  saveTruck: apiUrl + "api/trucks",
  getAllServices: apiUrl + "api/services",
  saveService: apiUrl + "api/services"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllTrucks(): Observable<any> {
    return this.webApiService.get(httpLink.getAllTrucks);
  }

  public deleteTruckById(model: any): Observable<any> {
    return this.webApiService.delete(httpLink.deleteTruckById + '/' + model, "");
  }

  public getTruckDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getTruckDetailById + '/' + model);
  }

  public saveTruck(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveTruck, model);
  }

  public updateTruck(model: any): Observable<any> {
    return this.webApiService.put(httpLink.saveTruck, model);
  }

  public getAllServices(): Observable<any> {
    return this.webApiService.get(httpLink.getAllServices);
  }

  public saveService(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveService, model);
  }
}
