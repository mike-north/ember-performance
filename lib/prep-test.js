var spawn = require('child_process').spawn;
var RSVP  = require('rsvp');
var chalk = require('chalk');

var SCENARIO_TO_FILENAME = {
  'ember-1.8': 'package.json.1-8-1',
  'ember-1.9': 'package.json.1-9-1'
};

function resetPackageJson() {
  return new RSVP.Promise(function (resolve, reject) {
    console.log(chalk.green('Resetting package.json'));
    var p = spawn('git', ['checkout', 'package.json']);
    p.on('close', function (code) {
      resolve();
    });
  })
}

function npmInstall() {
  return new RSVP.Promise(function (resolve, reject) {
    console.log(chalk.green('Running npm install'));
    var p = spawn('npm', ['install']);
    p.on('close', function(code) {
      resolve();
    })
  });
};

function setupScenario() {
  return new RSVP.Promise(function (resolve, reject) {
    console.log(chalk.green('Setting up testing scenario: ' + process.env.EMBER_TRY_SCENARIO));
    switch(process.env.EMBER_TRY_SCENARIO) {
      case 'ember-1.8':
      case 'ember-1.9':
        var filename = SCENARIO_TO_FILENAME[process.env.EMBER_TRY_SCENARIO];
        var p = spawn('cp', [filename, 'package.json']);
        p.on('close', function (code) {
          resolve();
        });
        resolve();
      default:
        resolve();
        break;
    }
  });
}


resetPackageJson()
  .then(setupScenario)
  .then(npmInstall);
