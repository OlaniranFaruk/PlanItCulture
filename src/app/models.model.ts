import { Time } from "@angular/common";

export class InfoEvent {
    id: number;
    Eventname: string;
    Date: string;
    Time: string;
    Location: string;
    description: string;
    category: string;
    Targetgroup: number;
    AmntTargetGroup: number;
    Website: string;
    Organizer: string;

    constructor(){
        this.id = 0;
        this.Eventname = '';
        this.Date = '';
        this.Time= '';
        this.Location = '';
        this.description = '';
        this.category = '';
        this.Targetgroup = 0;
        this.AmntTargetGroup = 0;
        this.Website = '';
        this.Organizer = ''

    }
}

export class Contact {
    Name: string;
    Organisation: string;
    Function: string;
    Email: string;
    GSM: string;
    EventId: number;

    constructor () {
        this.Name = '';
        this.Organisation = '';
        this.Function = '';
        this.Email = '';
        this.GSM = '';
        this.EventId = 0;
    }
}