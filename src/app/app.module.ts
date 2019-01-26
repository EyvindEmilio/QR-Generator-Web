import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';

import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QRCodeModule} from 'angularx-qrcode';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        QRCodeModule, FormsModule,
        MatButtonModule, MatCheckboxModule, MatMenuModule,
        MatToolbarModule, MatTabsModule, MatCardModule, MatInputModule,
        MatIconModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatOptionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
