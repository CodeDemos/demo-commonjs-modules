'use strict';

const create = function () {
  console.log('insert into database');
};

const read = function () {
  console.log('read from database');
};

const update = function () {
  console.log('update database');
};

const remove = function () {
  console.log('remove from database');
};

module.exports = { create, read, update, remove };