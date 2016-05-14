/// <reference path="people.ts" />
/// <reference path="people.service.ts" />
/// <reference path="role.service.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var people_service_1 = require('./people.service');
var role_service_1 = require('./role.service');
var http_1 = require("angular2/http");
var http_2 = require('angular2/http');
require('rxjs/Rx');
var PeopleEditComponent = (function () {
    function PeopleEditComponent(_Service, _rolesService, _routeParams, _http) {
        this._routeParams = _routeParams;
        this.loadRoles = function (data) {
            this.roles = new Array();
            for (var i = 0; i < data.length; i++) {
                this.roles.push(new Role(data[i].Id, data[i].Name));
            }
        };
        this.PeopleService = _Service;
        this.RolesService = _rolesService;
        this.http = _http;
    }
    PeopleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get("id");
        this.PeopleService.getPerson(id)
            .then(function (person) { return _this.loadAPerson(person); });
        this.RolesService.getRoles().then(function (results) {
            _this.loadRoles(results[0]);
        });
    };
    PeopleEditComponent.prototype.loadAPerson = function (data) {
        this.person = new People(data.Id, data.Email, data.FirstName, data.LastName, data.RoleId);
    };
    PeopleEditComponent.prototype.goBack = function () {
        window.history.back();
    };
    //Save(person: People) {
    //    this.PeopleService.createPerson(JSON.stringify(person), this.http).then(person => this.extractData(person));
    //}
    PeopleEditComponent.prototype.Update = function (person) {
        var _this = this;
        this.PeopleService.updatePerson(JSON.stringify(person), this.http).then(function (person) { return _this.extractData(person); });
    };
    PeopleEditComponent.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        var data = body.data || {};
        alert("ok");
    };
    PeopleEditComponent = __decorate([
        core_1.Component({
            selector: 'user-item',
            templateUrl: "/People/peopleEdit.html",
            providers: [
                http_2.HTTP_PROVIDERS,
                people_service_1.PeopleService,
                role_service_1.RolesService
            ],
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService, role_service_1.RolesService, router_1.RouteParams, http_1.Http])
    ], PeopleEditComponent);
    return PeopleEditComponent;
}());
exports.PeopleEditComponent = PeopleEditComponent;
//# sourceMappingURL=PeopleEditComponent.js.map