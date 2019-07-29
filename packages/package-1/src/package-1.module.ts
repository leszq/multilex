import { NgModule } from "@angular/core";

import { Package1Component } from "./package-1/package-1.component";

@NgModule({
	exports: [
		Package1Component
	],
	declarations: [
		Package1Component
	]
})
export class Package1Module {

}