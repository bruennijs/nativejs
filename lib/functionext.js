/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 02.10.13
 * Time: 19:56
 * To change this template use File | Settings | File Templates.
 */

(function () {
  Function.prototype.method = function method(name, val) {
    this.prototype[name] = val;
  };
}());
