import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quotes } from '../../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isRead = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upvote(){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
