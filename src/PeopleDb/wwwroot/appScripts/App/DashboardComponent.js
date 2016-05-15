/// <reference path="people.ts" />
/// <reference path="people.component.ts" />
/// <reference path="role.component.ts" />
/// <reference path="role.ts" />
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
var people_component_1 = require('./people.component');
var people_service_1 = require('./people.service');
var role_component_1 = require('./role.component');
var role_service_1 = require('./role.service');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var DashboardComponent = (function () {
    function DashboardComponent(_peopleService, _roleService, _router) {
        this._router = _router;
        this.loadPeople = function (data) {
            this.peoples = new Array();
            for (var i = 0; i < data.length; i++) {
                var person = new People(data[i].Id, data[i].Email, data[i].FirstName, data[i].LastName, data[i].RoleId);
                person.roleName = this.roles.find(function (x) { return x.id === data[i].RoleId; }).name;
                this.peoples.push(person);
            }
        };
        this.loadRoles = function (data) {
            this.roles = new Array();
            for (var i = 0; i < data.length; i++) {
                this.roles.push(new Role(data[i].Id, data[i].Name));
            }
        };
        this.peopleService = _peopleService;
        this.roleService = _roleService;
        this.router = _router;
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleService.getRoles().then(function (results) {
            _this.loadRoles(results[0]);
        });
        this.peopleService.getPeople().then(function (results) {
            _this.loadPeople(results[0]);
        });
    };
    ;
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: "/People/Dashboard.html",
            providers: [
                people_service_1.PeopleService,
                role_service_1.RolesService
            ],
            directives: [people_component_1.PeopleComponent, role_component_1.RolesComponent]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService, role_service_1.RolesService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=DashboardComponent.js.map