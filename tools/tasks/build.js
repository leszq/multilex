"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ng_packagr_1 = require("ng-packagr");
exports.isWatchMode = !!process.env.WATCH_MODE;
ng_packagr_1.ngPackagr()
    .forProject("./ng-package.js")
    .withTsConfig("../../tsconfig.build.json")
    .withOptions({
    watch: exports.isWatchMode
})
    .buildAsObservable()
    .subscribe();
