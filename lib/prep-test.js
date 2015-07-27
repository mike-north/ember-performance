var cpr   = require('cpr');
var spawn = require('child_process').spawn;

var p = spawn('git', ['checkout', 'package.json']);

p.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
