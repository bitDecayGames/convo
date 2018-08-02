import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ConvoListPage} from "../pages/convo-list/convo-list";
import {ConvosProvider} from '../providers/convos/convos';
import {ComponentsModule} from "../components/components.module";
import {ConvoEditPage} from "../pages/convo-edit/convo-edit";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConvoListPage,
    ConvoEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConvoListPage,
    ConvoEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConvosProvider
  ]
})
export class AppModule {}
