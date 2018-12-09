import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  
      this.photoService
          .listFromUser('flavio')
          .subscribe(photos => this.photos = photos);
  }

}
