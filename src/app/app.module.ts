import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { sourcesPage } from '../pages/sources/sources';
import { ContactPage } from '../pages/bookmarked/bookmarked';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { NewsCard } from '../components/news-card/card';
import { TimeAgoPipe } from 'time-ago-pipe';
import { BookmarkProvider } from '../components/bookmark'
import { TopBySource } from '../pages/source-top';

@NgModule({
  declarations: [
    MyApp,
    sourcesPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsCard,
    TimeAgoPipe,
    TopBySource
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    sourcesPage,
    ContactPage,
    HomePage,
    TabsPage,
    TopBySource
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BookmarkProvider
  ]
})
export class AppModule { }
