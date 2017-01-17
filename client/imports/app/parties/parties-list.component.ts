import { Component } from '@angular/core';

import template from './parties-list.component.html';
import {Party} from "../../../../both/models/party.model";
import {Observable} from "rxjs";
import {Parties} from "../../../../both/collections/parties.collection";

@Component({
    selector: 'parties-list',
    template
})

export class PartiesListComponent {

    parties: Observable<Party[]>;

    constructor() {
        this.parties = Parties.find({}).zone();
    }

    removeParty(party: Party): void {
        Parties.remove(party._id);
    }
}