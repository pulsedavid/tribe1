import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TribesproupPage } from '../tribesproup/tribesproup';

@Component({
  selector: 'page-tribespro',
  templateUrl: 'tribespro.html'
})
export class TribesproPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }


  tribesproup() {
    let modal = this.modalCtrl.create(TribesproupPage);
    modal.present();
  } 
}
