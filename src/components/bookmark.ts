import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'bookmarks';

@Injectable()
export class BookmarkProvider {

  constructor(public storage: Storage) { }

  isBookmark(filmId) {
    return this.getAllBookmarkFilms().then(result => {
      if (result) {

        return result.some(function (el) {//if array has an object containing the url value
          return el.url === filmId.url;
        });
      } else {
        return false; //if the boomarks doesb't exist in storage
      }
    });
  }

  bookmarkedCard(filmId) {
    return this.getAllBookmarkFilms().then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }

  unbookmarkedCard(filmId) {
    return this.getAllBookmarkFilms().then(result => {
      if (result) {
        let urlArray = result.map(function (e) { return e.url });
        let index = urlArray.indexOf(filmId)
        result.splice(index, 1);//delete if unliked
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllBookmarkFilms() {
    //this.storage.clear()
    return this.storage.get(STORAGE_KEY).then(val => {
      if (val != null) {
        return val;
      }
      else {
        return;
      }

    }, err => {
      console.log("Storage error : ", err)
    })
  }

}