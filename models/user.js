/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 03.10.13
 * Time: 15:43
 * To change this template use File | Settings | File Templates.
 */

require('./../lib/objectext');
var $ = require('underscore');

var User = function () {
    this.id = $.random(1, 999999);
  };

User.prototype.get_id = function () {
  return this.id;
};

module.exports.User = User;

/* factory method */
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


