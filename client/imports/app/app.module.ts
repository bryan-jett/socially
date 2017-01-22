import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {PARTIES_DECLARATIONS} from './parties';
import {routes, ROUTES_PROVIDERS} from "./app.routes";
import {RouterModule} from "@angular/router";
import {AccountsModule} from "angular2-meteor-accounts-ui";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule
    ],
    declarations: [
        AppComponent,
        ...PARTIES_DECLARATIONS
    ],
    providers: [
        ...ROUTES_PROVIDERS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}