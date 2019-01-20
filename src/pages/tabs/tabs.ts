import { Component } from '@angular/core';
import { MyprofilePage } from '../myprofile/myprofile';
import { ContactlistPage } from '../contactlist/contactlist';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyprofilePage;
  tab2Root = HomePage;
  tab3Root = ContactlistPage;

  constructor() {
    
  }

}
