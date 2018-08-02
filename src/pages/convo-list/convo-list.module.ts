import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ConvoListPage} from './convo-list';

@NgModule({
  declarations: [
    ConvoListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvoListPage),
  ]
})
export class ConvoListPageModule {}
