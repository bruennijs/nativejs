  /**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 02.10.13
 * Time: 16:07
 * To change this template use File | Settings | File Templates.
 */

(function () {

  require('./../lib/objectext');
  console = require('console');

  var switchPrototype = {

    state: false,
    location: 'default',
    position: { x: 0, y: 0 },

    get_state: function () {
      return this.state;
    },

  /**
     * @param {Function} val
     */
    set_state: function (val) {
      this.state = val;
    },

    set_position: function (x, y) {
      this.position.x = x;
      this.position.y = y;
    },

    set_position_complex: function (val) {
      this.position = val;
    },

    get_position: function () {
      return this.position;
    },

    get_location: function () {
      return this.location;
    },

    set_location: function (val) {
      this.location = val;
    },

    print: function () {
      console.log(this.get_location() + '(' + this.get_position().x + ',' + this.get_position().y + ')');
    }
  };

  var timerSwitchPrototype = {
    set_timer: function (val, timeout, callback) {
      this.set_state(val);
      callback(val);
    }
  };

  /* constructors */
  var Switch = function () {}
  Switch.prototype = switchPrototype;

  module.exports.Switch = Switch;

  var TimerSwitch = function () {}
  TimerSwitch.prototype = timerSwitchPrototype;

  module.exports.createSwitch = function () {
    return Object.create(switchPrototype);
  }

  module.exports.createTimerSwitch = function () {
    return Object.create(switchPrototype, timerSwitchPrototype);
  }
}());


