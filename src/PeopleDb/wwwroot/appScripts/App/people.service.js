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
var http_1 = require("angular2/http");
require('rxjs/Rx');
var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getPeople = function () {
        var config = new Config();
        var urls = [config.apiBaseUrl + "People"];
        return Promise.all(urls.map(function (url) {
            return fetch(url).then(function (resp) { return resp.json(); });
        }));
    };
    ;
    PeopleService.prototype.getPerson = function (id) {
        var config = new Config();
        var url = config.apiBaseUrl + "People/" + id;
        return Promise.resolve(fetch(url).then(function (resp) { return resp.json(); }));
    };
    ;
    PeopleService.prototype.createPerson = function (data, http) {
        var config = new Config();
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return http.post(config.apiBaseUrl + "People", data, options).toPromise();
    };
    ;
    PeopleService.prototype.updatePerson = function (data, http) {
        var config = new Config();
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return http.put(config.apiBaseUrl + "People", data, options).toPromise();
    };
    ;
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map