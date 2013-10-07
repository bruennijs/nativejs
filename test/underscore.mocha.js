/**
 * Created by bruentje on 06.10.13.
 */

var assert = require('assert');
var $ = require('underscore');

describe('underscore', function () {
  describe('#extend', function () {
    it('should copy methods to instance not to prototype', function () {
    var p = {
      state: false,
      get_state: function () {
        return this.state;
      }
    };

    var o1 = Object.create(p);
    var o2 = Object.create(p);

    assert.equal(o1.get_state(), o2.get_state());

    $.extend(o1, { get_state: function () {return 'hallo';}});

    assert.notEqual(o1.get_state, o2.get_state);

    assert.equal(o1.get_state(), 'hallo');
    });
  });

  describe('#method', function () {
    it('should add metnhod to prototype', function () {
    });
  });
});