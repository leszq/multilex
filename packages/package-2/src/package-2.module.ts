import { NgModule } from "@angular/core";

import { Package2Component } from "./package-2/package-2.component";
import { Package2RoutingModule } from './packakge-2-routing.module';

@NgModule({
	imports:[
		Package2RoutingModule
	],
	exports: [
		Package2Component
	],
	declarations: [
		Package2Component
	]
})
export class Package2Module {

}