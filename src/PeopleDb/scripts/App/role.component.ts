import {Component} from 'angular2/core';

@Component({
    selector: 'role-item',
    templateUrl: "/People/roleItem.html",
    inputs: ['role']
})
export class RolesComponent {
    role: Role;
}

