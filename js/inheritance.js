"use strict";

var c = require('console');
var util = require('util');
var $ = require("underscore");

/**
 * Constructor
 * @param name
 * @constructor
 */
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

/**
 * Constructor calling Person base
 * @param name
 * @param id
 * @constructor
 */
function Child(name, id) {
  Person.call(this, name);
  this.id = id;
}

util.inherits(Child, Person);

Child.prototype.getId = function () {
  return this.id;
}


var myapp; = (function () {
  return  {
    create: function () {

      var args = Array.prototype.slice(arguments);

      return new Person(args[0], args[1]);
    }
  }
}());

//var c = new c.Console(process.stdout, process.stderr);


var child = new Child("hello world", 5);
//c.info("create.getName[%s]", myapp.create("hello world").getName());
c.info("new Person [%s, %s]", child.getName(), child.getId());
c.info(child.hasOwnProperty('getName'));
c.info(child.hasOwnProperty('getId'));
c.info(child.hasOwnProperty('id'));
//c.info("new cp.getName[%s]", new cp("hello world").getName());



