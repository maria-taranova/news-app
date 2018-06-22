import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';



@Injectable()
export class NewsServiceComponent  {

    private apiKey = '&apiKey=4e6ac20b62354dab9fcc7ae306257e3e';

    constructor(private http: Http) { }

    getNames(q): Observable<string[]> {
        if(q.term === undefined){
            q.term = 'Vancouver';
        }

        if(q.fromDay === undefined){
            q.fromDay = new Date().toISOString().slice(0,10);
        }
        if(q.toDay === undefined ){
           q.toDay = new Date().toISOString().slice(0,10);
        }
        return this.http.get(`https://newsapi.org/v2/everything?q=${q.term}&from=${q.fromDay}&to=${q.toDay}&sortBy=popularity`+this.apiKey)
        .pipe(map(
            function(res: Response){
                let body = res.json();
                return body.articles;
            })).pipe(catchError(this.handleError));
    }


    getSources(): Observable<string[]> {

        return this.http.get(`https://newsapi.org/v2/sources?language=en`+this.apiKey)
            .pipe(map(
                function(res: Response){
                    let body = res.json();
                    return body.sources;
                }))
            .pipe(catchError(this.handleError));
    }


    getTopBySource(q): Observable<string[]> {
        return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${q.name}`+this.apiKey)
            .pipe(map(
                function(res: Response){
                    let body = res.json();
                    return body.articles;
                }))
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
        return _throw(JSON.stringify(error))
    }
}