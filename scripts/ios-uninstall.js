const exec = require('child_process').exec;
const path = require('path');
const isWin = /^win/.test(process.platform);

module.exports = function (ctx) {
	const projectRoot = ctx.opts.projectRoot

	var commands = {
		rmRF: isWin ? "rmdir /s" : "rm -rf"
	};

	function safePath(unsafePath) {
		return "\'" + path.join(projectRoot, "./platforms/ios/", unsafePath) + "\'";
	}

	exec(commands.rmRF + " " + safePath("./csdk_tmp"), {}, function (err) {
		if (err) {
			console.error("There was an error removing the platforms/ios/csdk_tmp directory. Please remove this folder.");
		}
		console.log("ConnectSDK iOS uninstall finished");
	});
}
