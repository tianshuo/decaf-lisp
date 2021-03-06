require('coffee-script');
var compiler = require('../compiler.coffee')
  , fs = require('fs')
  , path = require('path')
  , child_process = require('child_process')
  , source = fs.readFileSync(path.resolve(process.argv[2]), 'utf8')
  , tokens = compiler.split(source);

tokens = compiler.analyze(tokens);
var scopes = compiler.scope(tokens);

var objectCode = compiler.compile(scopes)
  , code = compiler.link(objectCode);

var consoleOutput = function (data) {
  process.stdout.write(data.toString('utf8'));
};

var node = child_process.spawn('node', ['-e', code].concat(process.argv.slice(2)))

node.stdout.on('data', consoleOutput);
node.stderr.on('data', consoleOutput);