module.exports = {
	deleteDestPath: !process.env.WATCH_MODE,
	lib: {
		entryFile: "public_api.ts",
		umdModuleIds: {
			// vendors
			"tslib": "tslib",
			"lodash": "_",
		}
	},
	whitelistedNonPeerDependencies: ["."]
}