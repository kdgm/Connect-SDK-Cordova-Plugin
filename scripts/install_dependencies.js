module.exports = function (context) {
     var shell = context.requireCordovaModule('shelljs');

     console.log("Installing node dependencies for cordova-plugin-connectsdk");
     shell.cd(context.opts.plugin.dir);
     shell.exec('npm install');
 };
