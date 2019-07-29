import { ngPackagr } from "ng-packagr";

export const isWatchMode = !!process.env.WATCH_MODE;

ngPackagr()
	.forProject("./ng-package.js")
	.withTsConfig("../../tsconfig.build.json")
	.withOptions({
		watch: isWatchMode
	})
	.buildAsObservable()
	.subscribe();
