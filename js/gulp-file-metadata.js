'use strict';

module.exports = GulpFileMetadata;

var TransformCtor = require('stream').Transform;
var util = require('util');
var gutil = require('gulp-util');
var path = require('path');

function GulpFileMetadata(opts) {
  if (!(this instanceof GulpFileMetadata)) {
    return new GulpFileMetadata(opts);
  }

  opts.objectMode = opts.objectMode || true;
  this.log = opts.log || false;

  TransformCtor.call(this, opts);
}

util.inherits(GulpFileMetadata, TransformCtor);

GulpFileMetadata.prototype._transform = function (file, encoding, callback) {
  var fileName = path.basename(file.path);
  if (this.log) {
    gutil.log(util.format('%s->%s', file.path, fileName));
  }

  file.name = fileName;
  this.push(file, encoding);
  callback();
};



