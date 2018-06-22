import { Component } from '@angular/core';
import { NewsServiceComponent } from '../components/newsservice/newsservice';
import { Storage } from '@ionic/storage';
import { BookmarkProvider } from '../components/bookmark';
import { NavParams } from 'ionic-angular';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>{{name}}</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content overflow-scroll="true">
      <div class="list">
       <news-card *ngFor="let item of NewsBySource" [item]="item"></news-card>

    </div>
</ion-content>`,
  providers: [NewsServiceComponent]
})
export class TopBySource {
  NewsBySource: Array<any>;
  myInput: string = '';
  _myDataService: NewsServiceComponent;
  name: string;
  dbError: string;
  constructor(private navParams: NavParams, public storage: Storage, public bookmarkProvider: BookmarkProvider, myDataService: NewsServiceComponent) {
    this.name = navParams.get('name');
    this._myDataService = myDataService;

  }
  ionViewDidEnter() {
    let q = {
      name: this.name
    };
    this.getNewsBySource(q);
  }

  getNewsBySource(q) {


    this._myDataService.getTopBySource(q)
      .subscribe(

        data => {
          this.NewsBySource = data;
          console.log(data);

        },
        // 2. Handle error.
        error => {
          this.dbError = 'No database connection';
          console.log(error);
        },
        // 3. Execute final instructions when successful.
        () => {
         // console.log("Finished")
        });
  }
}


