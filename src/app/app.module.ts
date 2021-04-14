import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AppComponent, DriversComponent, NavbarComponent, DriverDetailsComponent, LoadingComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
