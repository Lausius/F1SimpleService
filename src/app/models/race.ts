import { Driver } from "./driver";

export interface Race {
  raceName: string;
  location: {
    lat: number;
    long: number;
    locality: string;
    country: string;
  };
  date: string;
  results: [{
	  number: number;
	  position: number;
	  points: number;
	  Driver: Driver;
  }];
}
