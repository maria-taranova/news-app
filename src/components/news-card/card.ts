import { Component, Input } from '@angular/core';
import { BookmarkProvider } from '../bookmark';

@Component({
  selector: 'news-card',
  templateUrl: 'card.html'
})
export class NewsCard {
  @Input() item: any;
  isBookmark = false;

  constructor(public bookmarkProvider: BookmarkProvider) {
 

  }

  ngOnInit(){
    this.bookmarkProvider.isBookmark(this.item).then(isFav => {
      this.isBookmark = isFav; //check if bookmark exist
      })
  }
  ionViewDidEnter() {
  
  }

  bookmarkedCard() {
    this.bookmarkProvider.bookmarkedCard(this.item).then(() => {
      this.isBookmark = true;
    });
  }
 
  unbookmarkedCard() {
    this.bookmarkProvider.unbookmarkedCard(this.item.url).then(() => {
      this.isBookmark = false;
    });
  }

}