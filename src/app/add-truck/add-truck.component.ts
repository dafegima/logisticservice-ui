import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.scss']
})
export class AddTruckComponent implements OnInit {
  addTruckForm: truckForm = new truckForm();

  @ViewChild("truckForm")
  truckForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddTruck(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveTruck(this.addTruckForm).subscribe(async data => {
        debugger
          if (data != null) {
              this.toastr.success("Truck saved successfully.");
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
          }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }

}

export class truckForm {
  licensePlate: string = "";
  color: string = "";
  brand: string = "";
  yearModel: number = 0;
}