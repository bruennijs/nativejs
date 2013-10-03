/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 03.10.13
 * Time: 15:43
 * To change this template use File | Settings | File Templates.
 */

require('./../lib/objectext');
var $ = require('underscore');

var userPrototype = {
};

module.exports.create = function (nickName, emailVal) {

  var id = $.random();

  return Object.create({}, {

    get_id: function () {
      return id;
    },

    get_nick: function () {
      return nickName;
    },

    get_email: function () {
      return emailVal;
    }
  });
}


