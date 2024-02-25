import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/places/place.mode';
import { PlacesService } from 'src/app/places/places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();
  }
}
