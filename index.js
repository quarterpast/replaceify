var minimatch = require('minimatch');
var through = require('through');

function replaceify(file, options) {
  for(var glob in options) if(options.hasOwnProperty(glob)) {
    if(minimatch(file, glob)) {
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