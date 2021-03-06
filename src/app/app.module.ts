import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { MaterialModule } from './/material.module';
import { CoreModule } from './core/core.module';
import { RoutingModule } from './/routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
