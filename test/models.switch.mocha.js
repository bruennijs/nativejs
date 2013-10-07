/**
 * Created by bruentje on 08.10.13.
 */

var assert = require('assert');

var user = require('./../lib/objectext');
var user = require('./../models/user');
var switches = require('./../models/switch');


describe('models', function () {
  describe('#switch', function () {
    it('should persist prop set on instancxe not on prototype', function () {
        var switch1 = switches.createSwitch();
        var switch2 = switches.createSwitch();

        assert.equal(switch1.get_location(), switch2.get_location());

        switch1.set_location('new value');

        assert.notEqual(switch1.get_location(), switch2.get_location());
    });
  });
});

describe('models', function () {
  describe('#user', function () {
    it('should persist prop set on instancxe not on prototype', function () {
      var switch1 = switches.createSwitch();
      var switch2 = switches.createSwitch();

      assert.equal(switch1.get_location(), switch2.get_location());

      switch1.set_location('new value');

      assert.notEqual(switch1.get_location(), switch2.get_location());
    });
  });
});

describe('models', function () {
  describe('#user', function () {
  var nick = 'bruenni',
      email = 'email value';

    var obj1 = user.create(nick, email);

    obj1.log_properties();

    nick = 'new nick value';

    assert.equal(obj1.get_nick(), 'bruenni');
  });
});

//(function testAddUserPropsAfterCreate() {
//}());
//
//(function testUserCreateByPrototypeHideInstanceVariables() {
//  console.log('testUserCreateByPrototypeHideInstanceVariables');
//  var u = new user.User();
//  console.log(u.get_id());
//  //console.log(u.id());
//}());
