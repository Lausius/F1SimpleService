import { Component, OnInit } from '@angular/core';
import { Driver } from '../../models/driver';
import { F1SimpleService } from '../../services/f1-simple.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
})
export class DriversComponent implements OnInit {
  public Drivers: Driver[];
  constructor(service: F1SimpleService) {
    service.getDrivers().subscribe((response) => (this.Drivers = response));
  }

  public logDrivers() {
    console.log(this.Drivers);
  }

  ngOnInit(): void {}
}
