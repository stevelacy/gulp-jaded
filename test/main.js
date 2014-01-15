var should = require('should');
var jaded = require('../');
var gutil = require('gulp-util');
var fs = require('fs');

require('mocha');

describe('gulp-jaded', function() {
  it('should render jaded .jade files to javascript .js', function(done){
    var J = jaded();
    var fakeFile = new gutil.File({
      base: 'test/fixtures',
      cwd: 'test/',
      path: 'test/fixtures/normal.jade',
      contents: fs.readFileSync('test/fixtures/normal.jade')
    });

    J.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      String(newFile.contents).should.equal(fs.readFileSync('test/expected/normal.js', 'utf8'));
      done();
    });
    J.write(fakeFile);

  });  
});
