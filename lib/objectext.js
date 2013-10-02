/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 02.10.13
 * Time: 15:58
 * To change this template use File | Settings | File Templates.
 */

(function () {

  var utils = require('util'),
      $ = require('underscore');

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
}());
