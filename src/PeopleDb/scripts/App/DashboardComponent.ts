/// <reference path="people.ts" />
/// <reference path="people.component.ts" />
/// <reference path="role.component.ts" />
/// <reference path="role.ts" />


import {PeopleComponent} from './people.component';
import {PeopleService} from './people.service';
import {RolesComponent} from './role.component';
import {RolesService} from './role.service';

import {Component } from 'angular2/core';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: "/People/Dashboard.html",
    providers: [
        PeopleService,
        RolesService
    ],
    directives: [PeopleComponent, RolesComponent]
})
export class DashboardComponent implements OnInit {

    public peopleService: PeopleService;
    public roleService: RolesService;
    public router: Router;

    constructor(_peopleService: PeopleService, _roleService: RolesService,private _router: Router) {
        this.peopleService = _peopleService;
        this.roleService = _roleService;
        this.router = _router;
    };

    ngOnInit() {
        this.peopleService.getPeople().then(results => {
            this.loadPeople(results[0]);
        });

        this.roleService.getRoles().then(results => {
            this.loadRoles(results[0]);
        });
    };

    loadPeople = function (data: any) {
        this.peoples = new Array<People>();
        for (var i = 0; i < data.length; i++) {
            this.peoples.push(new People(data[i].Id, data[i].Email, data[i].FirstName, data[i].LastName, data[i].RoleId));
        }
    };

    loadRoles = function (data: any) {
        this.roles = new Array<Role>();
        for (var i = 0; i < data.length; i++) {
            this.roles.push(new Role(data[i].Id, data[i].Name));
        }
    };

  


}