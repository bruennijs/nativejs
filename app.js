/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 02.10.13
 * Time: 15:57
 * To change this template use File | Settings | File Templates.
 */

require('./lib/objectext');
var console = require('console');

var models = require('./models/switch');

(function testPrototypePropSetter() {
  console.log('testPrototypePropSetter');

  var switch1 = models.createSwitch();
  var switch2 = models.createSwitch();

  console.log(switch1.get_location());
  console.log(switch2.get_location());

  switch1.set_location('new value');

  console.log(switch1.get_location());
  console.log(switch2.get_location());
}());

(function testInheritedObjectExtension() {
  var timer1 = models.createTimerSwitch();

  console.log(timer1.get_location());

  timer1.set_timer(true, 2000, function (newVal) {
    console.log(newVal);
  });
}());
