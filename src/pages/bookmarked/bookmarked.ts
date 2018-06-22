import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BookmarkProvider } from '../../components/bookmark';

@Component({
  selector: 'page-bookmarked',
  templateUrl: 'bookmarked.html'
})
export class ContactPage {
  SavedNews: any;

  constructor(public navCtrl: NavController, public storage: Storage, public bookmarkProvider: BookmarkProvider) {

  }

ionViewDidEnter() {
  this.bookmarkProvider.getAllBookmarkFilms().then(val => {
    this.SavedNews = val;
 });
  console.log(this.SavedNews)
}
}