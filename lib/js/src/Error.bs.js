// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Process$AgdaMode = require("agda-mode/lib/js/src/Process.bs.js");

function toString(e) {
  switch (e.tag | 0) {
    case /* PathSearch */0 :
        return Curry._1(Process$AgdaMode.PathSearch.$$Error.toString, e[0]);
    case /* Validation */1 :
        return Curry._1(Process$AgdaMode.Validation.$$Error.toString, e[0]);
    case /* Process */2 :
        return Process$AgdaMode.$$Error.toString(e[0]);
    
  }
}

var Connection = {
  Process: undefined,
  toString: toString
};

exports.Connection = Connection;
/* Process-AgdaMode Not a pure module */