import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  addServiceForm: serviceForm = new serviceForm();

  @ViewChild("serviceForm")
  serviceForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddService(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveService(this.addServiceForm).subscribe(async data => {
        if (data != null){
              this.toastr.success("Service saved successfully.");
              setTimeout(() => {
                this.router.navigate(['/Services']);
              }, 500);
            }
          },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Services']);
          }, 500);
        })
      }
    }
}

export class serviceForm {
  licensePlate: string = "";
  description: string = "";
  origin: string = "";
  originLatitude: number = 26.126101;
  originLongitude: number = -80.137094;
  destination: string="";
  destinationLatitude: number= 26.111828;
  destinationLongitude: number= -80.160498;
  status: string="";
}