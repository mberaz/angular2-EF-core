
/// <reference path="people.ts" />
/// <reference path="people.service.ts" />
/// <reference path="role.service.ts" />

import {Component} from 'angular2/core';
import {RouteParams } from 'angular2/router';
import {Input, OnInit } from 'angular2/core';
import {PeopleService} from './people.service';
import {RolesService} from './role.service';
import {Http, HTTP_BINDINGS, Headers, RequestOptions, Response} from "angular2/http";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
    selector: 'user-item',
    templateUrl: "/People/peopleEdit.html",
    providers: [
        HTTP_PROVIDERS,
        PeopleService,
        RolesService
    ],
})
export class PeopleEditComponent implements OnInit {
    person: People;
    public http: any;
    public PeopleService: PeopleService;
    public RolesService: RolesService;
    constructor(_Service: PeopleService,
        _rolesService: RolesService,
        private _routeParams: RouteParams,
        _http: Http) {
        this.PeopleService = _Service;
        this.RolesService = _rolesService
        this.http = _http;
    }

    ngOnInit() {
        let id = +this._routeParams.get("id");
        this.PeopleService.getPerson(id)
            .then(person => this.loadAPerson(person));

        this.RolesService.getRoles().then(results => {
            this.loadRoles(results[0]);
        });
    }

    loadAPerson(data: any) {
        this.person = new People(data.Id, data.Email, data.FirstName, data.LastName, data.RoleId)
    }

    loadRoles = function (data: any) {
        this.roles = new Array<Role>();
        for (var i = 0; i < data.length; i++) {
            this.roles.push(new Role(data[i].Id, data[i].Name));
        }
    }
    goBack() {
        window.history.back();
    }

    //Save(person: People) {
    //    this.PeopleService.createPerson(JSON.stringify(person), this.http).then(person => this.extractData(person));
    //}

    Update(person: People) {
        this.PeopleService.updatePerson(JSON.stringify(person), this.http).then(person => this.extractData(person));
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        var data = body.data || {};

        alert("ok");
    }
}