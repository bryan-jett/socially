import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {PARTIES_DECLARATIONS} from './parties';
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...PARTIES_DECLARATIONS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}