import { Component } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
  dog: Dog = {
    "message": "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_945.jpg",
    "status": "true"
  }as Dog;

  getName():string[]{
    return this.dog.message.split("/")[4].split("-");
  }

}
