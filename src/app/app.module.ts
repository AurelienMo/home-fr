import { BrowserModule } from '@angular/platform-browser';
import {IconsModule, MDBBootstrapModulePro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import { SpinnerComponent } from './modules/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MDBBootstrapModulePro.forRoot(),
    IconsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxSpinnerModule
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
