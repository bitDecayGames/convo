import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvoEditPage } from './convo-edit';

@NgModule({
  declarations: [
    ConvoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvoEditPage),
  ],
})
export class ConvoEditPageModule {}
