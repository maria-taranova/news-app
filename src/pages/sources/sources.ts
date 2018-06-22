import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsServiceComponent } from '../../components/newsservice/newsservice';
import { TopBySource } from '../source-top';

import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-sources',
    templateUrl: 'sources.html',
    providers: [NewsServiceComponent],
    entryComponents: [TopBySource]

})
export class sourcesPage {
    Sources: Array<any>;
    quriedSources;
    myInput: string = '';
    _myDataService: NewsServiceComponent;
    dbError: string; //when no network connection 

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(myDataService: NewsServiceComponent, public storage: Storage, public navCtrl: NavController) {
        // Store local reference to MyDataService.
        this._myDataService = myDataService;
    }

    ionViewDidEnter() {

        this.getSomeData();

    }
    initializeItems() {
        this.Sources = this.quriedSources;

    }
    pushPage(name) {
        this.navCtrl.push(TopBySource, {
            name: name
        });
    }


    getSomeData() {


        this._myDataService.getSources()
            .subscribe(

                data => {
                    this.quriedSources = data;

                },
                // 2. Handle error.
                error => {
                    this.dbError = 'No database connection';
                    console.log(error);
                },
                // 3. Execute final instructions when successful.
                () => {
                    this.Sources = this.quriedSources;

                });
    }
    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.Sources = this.Sources.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
