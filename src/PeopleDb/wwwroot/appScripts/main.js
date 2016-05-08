/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>
//import {bootstrap} from 'angular2/platform/browser'
//import {AppComponent} from './App/AppComponent'
//bootstrap(AppComponent);
"use strict";
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var AppComponent_1 = require('./App/AppComponent');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
browser_1.bootstrap(AppComponent_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=main.js.map