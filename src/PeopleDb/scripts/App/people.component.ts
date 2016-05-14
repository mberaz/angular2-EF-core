import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
@Component({
    selector: 'people-item',
    templateUrl: "/People/peopleItem.html",
    inputs: ['people']
})
export class PeopleComponent {
    people: People;

    public router: Router;
    constructor( private _router: Router) {
        this.router = _router;
    };

    goto(people: People) {
        let link = ['PeopleDetail', { id: people.id }];
        this.router.navigate(link);
    }; 
}

