import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/places/place.mode';
import { PlacesService } from 'src/app/places/places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[] = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.offers = this.placesService.getPlaces();
  }
}
