"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_server_1.ServerModule,
            app_module_1.AppModule
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=/Users/techninja/Documents/Docs/Business/WaleYaFoto/site/wyf-app/ts-node/b2de5ab7299557ecfa446e5fc2274177ef31d3ec/c60139526ab0e7827130c73f51fe48e3cc170a28.js.map