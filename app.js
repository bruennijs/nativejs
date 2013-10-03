/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 02.10.13
 * Time: 15:57
 * To change this template use File | Settings | File Templates.
 */

require('./lib/objectext');
require('./lib/functionext');
var console = require('console');

var switches = require('./models/switch');
var user = require('./models/user');

(function testPrototypePropSetter() {
  console.log('testPrototypePropSetter');

  var switch1 = switches.createSwitch();
  var switch2 = switches.createSwitch();

  console.log(switch1.get_location());
  console.log(switch2.get_location());

  switch1.set_location('new value');

  console.log(switch1.get_location());
  console.log(switch2.get_location());
}());

(function testInheritedObjectExtension() {
  var timer1 = switches.createTimerSwitch();

  console.log(timer1.get_location());

  timer1.set_timer(true, 2000, function (newVal) {
    console.log(newVal);
  });
}());

(function testSetSharedPropsOnPrototype() {
  console.log('testSetSharedPropsOnPrototype');
  var obj1 = new switches.Switch();
  var obj2 = new switches.Switch();

  obj1.set_position(3, 4711);

  console.log(obj1.print());
  console.log(obj2.print());

  obj1.set_position_complex({ x: 2, y: 2});
  obj2.set_location('new loc value');

  console.log(obj1.print());
  console.log(obj2.print());

  switches.Switch.prototype.location = "set on prototype";

  console.log(obj1.print());
  console.log(obj2.print());
}());

(function testMethodToPrototypeWithFunctionMethodExtension() {
  console.log('testMethodToPrototypeWithFunctionMethodExtension');

  var obj1 = switches.createSwitch();

  obj1.set_position(2, 3);

  switches.Switch.method('surface', function () {
    return this.get_position().x * this.get_position().y;
  });

  console.log(obj1.surface());

}());

(function testAddUserPropsAfterCreate() {
  var nick = 'bruenni',
      email = 'email value';
  var obj1 = user.create(nick, email);

  obj1.log_properties();

  nick = 'new nick value';

  obj1.log_properties();
}());
