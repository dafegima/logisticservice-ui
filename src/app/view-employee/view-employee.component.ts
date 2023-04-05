import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { WebApiService } from '../service/web-api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  licensePlate: any;
  employeeDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    debugger
    this.licensePlate = this.route.snapshot.params['licensePlate'];      
    this.getTruckDetailById();
  }

  getTruckDetailById() {       
    this.httpProvider.getTruckDetailById(this.licensePlate).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.employeeDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
