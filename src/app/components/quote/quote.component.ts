import { Component, OnInit } from '@angular/core';
import { Quote } from '../.././quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [ ];
  addNewQuote(quote) {
    this.quotes.unshift(quote);
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Do you want to delete?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() { }
  ngOnInit() {
  }
}
