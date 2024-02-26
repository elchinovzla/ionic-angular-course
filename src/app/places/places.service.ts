import { Injectable } from '@angular/core';
import { Place } from 'src/app/places/place.mode';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Palafito',
      'A beach house in los Roques',
      'https://www.abnconcept.com/img/_large_1016441542021__2739831805.jpg',
      300.0
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://www.parisperfect.com/g/hero-images/home/margaux-eiffel-1920x880.jpg',
      189.99
    ),
    new Place(
      'p3',
      'Manhattan Mansion',
      'In the heart of New York',
      'https://giggster.com/blog/content/images/size/w960/2020/11/10-Stunning-Mansions-To-Rent-For-Film-and-Photo-in-New-York.jpeg',
      149.99
    ),
  ];

  getPlaces = () => {
    return [...this._places];
  };

  constructor() {}

  getPlace = (id: string) => {
    return { ...this._places.find((p) => p.id === id) };
  };
}
