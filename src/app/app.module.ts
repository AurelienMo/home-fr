import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
    ButtonsModule,
    WavesModule, CollapseModule,
    InputsModule, SelectModule, IconsModule, MDBBootstrapModulePro, MDBSpinningPreloader, ToastModule
} from 'ng-uikit-pro-standard';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HeaderComponent} from './components/header/header.component';
import {ContactComponent} from './components/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {SpinnerComponent} from './modules/spinner/spinner.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContactComponent,
        SpinnerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonsModule,
        WavesModule,
        CollapseModule,
        ReactiveFormsModule,
        FormsModule,
        MDBBootstrapModulePro.forRoot(),
        IconsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        NgxSpinnerModule,
        NgxCaptchaModule,
        InputsModule,
        SelectModule,
        ToastModule.forRoot(),
    ],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
