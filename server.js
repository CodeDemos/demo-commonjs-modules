'use strict';

/**************************************
 * Require built-in node module like `http`
 * Note the non-relative path ('http')
 */
const http = require('http');
console.log(http.METHODS);
console.log(http.STATUS_CODES);
console.log(http.STATUS_CODES[418]); //=> "I'm a teapot"

/**************************************
 * Require npm installed packages like `express`
 * Again, note the non-relative path ('express')
 */
const express = require('express');
console.log(express);

for (let prop in express) {
  console.log(prop);
}

/**************************************
 * Require a simple module in a **FILE**
 * Note:
 *   the relative path ('./hello-file')
 *   no `.js` extension needed
 */
var helloFile = require('./hello-file');

console.log(helloFile);

/**************************************
 * Require a simple module in a **FOLDER**
 * Note:
 *   the relative path ('./hello-folder')
 *   no `index.js` needed since it's loaded by default
 */
var helloFolder = require('./hello-folder');

console.log(helloFolder);

/**
 * Require a commonjs module with multiple exports
 * Note: the relative path ('./models/storage')
 * Note: `index.js` is not specified since it's loaded by default
 */

const { create, read, update, remove } = require('./models/storage');

create();
read();
update();
remove();