"use strict";

var c = require('console');
var util = require('util');

function Child(name, id) {
  Person.call(this, name);
  this.id = id;
}

Child.prototype.getId = function () {
  return this.id;
}

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
}

var cp = util.inherits(Child, Person);

var myapp = (function () {
  return  {
    create: function () {

      var args = Array.prototype.slice(arguments);

      return new Person(args[0], args[1]);
    }
  }
}());

//var c = new c.Console(process.stdout, process.stderr);


var p = new Child("hello world");
//c.info("create.getName[%s]", myapp.create("hello world").getName());
c.info("new Person [%s, %s]", p.getName(), p.getId());
//c.info("new cp.getName[%s]", new cp("hello world").getName());



