'use strict';

var console = require('console');
var util = require('util');

var array1 = ['hello', 'world'];
var array2 = ['array', '2'];

array1.forEach(function (obj) { console.info(obj); });
array1.slice.call(array2, 0, 2).forEach(function (obj) { console.info(obj); });

