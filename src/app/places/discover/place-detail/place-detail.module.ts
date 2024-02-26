import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPageRoutingModule } from './place-detail-routing.module';

import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { PlaceDetailPage } from './place-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailPageRoutingModule,
  ],
  declarations: [PlaceDetailPage, CreateBookingComponent],
})
export class PlaceDetailPageModule {}
