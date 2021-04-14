import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { DriversComponent } from './components/drivers/drivers.component';

const routes: Routes = [
  { path: '', component: DriversComponent, pathMatch: 'full' },
  { path: 'driver/:id', component: DriverDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
