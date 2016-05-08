import {Component} from 'angular2/core';

@Component({
    selector: 'people-item',
    templateUrl: "/People/peopleItem.html",
    inputs: ['people']
})
export class PeopleComponent {
    people: People;
}

