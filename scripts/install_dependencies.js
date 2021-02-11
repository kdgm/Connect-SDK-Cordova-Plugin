const exec = require('child_process').exec;

module.exports = function (ctx) {
     console.log("Installing node dependencies for cordova-plugin-connectsdk");
     exec("cd", ctx.opts.plugin.dir);
     exec("npm", "install");
 };
