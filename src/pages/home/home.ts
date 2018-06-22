import { Component } from '@angular/core';
import { NewsServiceComponent } from '../../components/newsservice/newsservice';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [NewsServiceComponent]
})
export class HomePage {
    News: Array<any>;
    myInput: string = '';
    isError: boolean = false;
    _myDataService: NewsServiceComponent;

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(myDataService: NewsServiceComponent, public storage: Storage) {
        this._myDataService = myDataService;
        this.loadDefault();
    }
    /*   ionViewDidEnter() { //load data each time the tab is entered
            this.loadDefault();
    }
    }*/

    loadDefault() {
        let q = {
            term: 'Vancouver',
            country: 'ca'
        };
        this.getSomeData(q)
    }
    onSearch(e) {
        let q = {
            term: e.target.value
        };
        this.getSomeData(q)
    }
    getSomeData(q) {
        this._myDataService.getNames(q)
            .subscribe(
                data => {
                    this.News = data;
              
                },
                // 2. Handle error.
                error => {
                    this.isError = true;
                    console.log(error)
                },
                // 3. Execute final instructions when successful.
                () => {
                   // console.log("Finished")
                });
    }
}
