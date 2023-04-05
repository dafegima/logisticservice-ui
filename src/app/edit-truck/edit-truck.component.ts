import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-edit-truck',
  templateUrl: './edit-truck.component.html',
  styleUrls: ['./edit-truck.component.scss']
})
export class EditTruckComponent implements OnInit {
  editTruckForm: truckForm = new truckForm();

  @ViewChild("truckForm")
  truckForm!: NgForm;

  isSubmitted: boolean = false;
  licensePlate: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.licensePlate = this.route.snapshot.params['licensePlate'];
    this.getTruckDetailById();
  }

  getTruckDetailById() {
    this.httpProvider.getTruckDetailById(this.licensePlate).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editTruckForm.LicensePlate = resultData.licensePlate;
          this.editTruckForm.Color = resultData.color;
          this.editTruckForm.Brand = resultData.brand;
          this.editTruckForm.YearModel = resultData.yearModel;
        }
      }
    },
      (error: any) => { });
  }

  EditTruck(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      debugger
      this.httpProvider.updateTruck(this.editTruckForm).subscribe(async data => {
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
  LicensePlate: string = "";
  Color: string = "";
  Brand: string = "";
  YearModel: number = 0;
}
