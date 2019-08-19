import { NgModule } from "@angular/core";

import { Package1Component } from "./package-1/package-1.component";
//import { Package1RoutingModule } from './package-1-routing.module';

@NgModule({
	imports:[
		//Package1RoutingModule
	],
	exports: [
		Package1Component
	],
	declarations: [
		Package1Component
	]
})
export class Package1Module {

}