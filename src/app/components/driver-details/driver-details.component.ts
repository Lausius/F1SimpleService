import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race } from 'src/app/models/race';
import { F1SimpleService } from 'src/app/services/f1-simple.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
})
export class DriverDetailsComponent implements OnInit {
  public races: Race[];
  constructor(
    private service: F1SimpleService,
    private route: ActivatedRoute
  ) {}

  public logRaces() {
    console.log(this.races);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);
      this.service.getRaceDetailsFromDriver(id).subscribe((races) => {
        this.races = races;
      });
    });
  }
}
