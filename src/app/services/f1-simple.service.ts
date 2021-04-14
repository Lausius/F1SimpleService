import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Driver } from '../models/driver';
import { Race } from '../models/race';

@Injectable({
  providedIn: 'root',
})
export class F1SimpleService {
  constructor(private httpClient: HttpClient) {}

  public getDrivers(): Observable<Driver[]> {
    return this.httpClient
      .get<IDriverData>('http://ergast.com/api/f1/2019/drivers.json')
      .pipe(
        map((drivers) => {
          return drivers.MRData.DriverTable.Drivers.map((driver) => {
            return ({
              driverId: driver.driverId,
              permanentNumber: driver.permanentNumber,
              givenName: driver.givenName,
              code: driver.code,
              familyName: driver.familyName,
              dateofBirth: driver.dateOfBirth,
              nationality: driver.nationality,
            } as unknown) as Driver;
          });
        })
      );
  }
  public getRaceDetailsFromDriver(id: string): Observable<Race[]> {
    return this.httpClient
      .get<Race[]>(`http://ergast.com/api/f1/drivers/${id}/results.json`)
      .pipe(
        map((races: any) => {
          return races.MRData.RaceTable.Races.map((race: Race) => {
            return race;
          });
        })
      );
  }
}

interface IDriverData {
  MRData: {
    DriverTable: {
      Drivers: Driver[];
    };
  };
}

interface IRaceData {
  MRData: {
    RaceTable: {
      Races: Race[];
    };
  };
}
