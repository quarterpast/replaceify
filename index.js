var minimatch = require('minimatch');
var through = require('through');
var path = require('path');

function replaceify(file, options) {
  var relative = path.relative(process.cwd(), file);

  for(var glob in options) if(options.hasOwnProperty(glob)) {
    if(minimatch(relative, glob)) {
      return through(
        function write(){ /* noop */ },
        function end(){
          this.queue(options[glob]);
          this.queue(null);
        }
      );
    }
  }
  return through();
}

module.exports = replaceify;