import { Component } from '@angular/core';

import { sourcesPage } from '../sources/sources';
import { ContactPage } from '../bookmarked/bookmarked';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = sourcesPage;
  tab3Root = ContactPage;

  constructor() {

  }
  
}
