/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 02.10.13
 * Time: 15:58
 * To change this template use File | Settings | File Templates.
 */

(function () {

  var $ = require('underscore');
  var utils = require('util');
  var console = require('console');

  /* objc create extension */
  Object.create = function (prototype, instanceprops) {
    var Ctor = function () {};
    Ctor.prototype = prototype;
    var inst = new Ctor();
    if (instanceprops)
    {
      $.extend(inst, instanceprops);
    }

    return inst;
  };

  Object.prototype.log_properties = function () {
    var msg = '';

    $.each($.keys(this), function (key) {
      var val = this[key];
      if (!(val instanceof Function))
      {
        msg += key + '=' + val;
      }
    });

    console.log(msg);
  };
}());
