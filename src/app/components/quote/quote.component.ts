import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[]=[
    new Quotes(1, 'Alex Otieno', 'Web Hosting', 'Website of all kinds are posted on cloud to facilitate many to access'),
    new Quotes(2, 'Alex', 'Tech and life', 'For a list of all the ways technology has failed to improve the quality of life, please press three'),
    new Quotes(3, 'James', 'Technology', 'Technology… the knack of so arranging that we don’t have to experience it.'),
  ]

  completeGoal(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
