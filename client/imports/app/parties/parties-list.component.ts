import {Component, OnDestroy, OnInit} from '@angular/core';

import template from './parties-list.component.html';
import {Party} from "../../../../both/models/party.model";
import {Observable} from "rxjs";
import { Subscription } from 'rxjs/Subscription';
import {Parties} from "../../../../both/collections/parties.collection";
import {MeteorObservable} from "meteor-rxjs";

@Component({
    selector: 'parties-list',
    template
})

export class PartiesListComponent implements OnInit, OnDestroy {

    parties: Observable<Party[]>;
    partiesSub: Subscription;

    ngOnInit() {
        this.parties = Parties.find({}).zone();
        this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
    }

    removeParty(party: Party): void {
        Parties.remove(party._id);
    }

    search(value: string): void {
        this.parties = Parties.find(value ? { location: value}: {}).zone();
    }

    ngOnDestroy() {
        this.partiesSub.unsubscribe();
    }
}