var React = require('react');
var React = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it ('should exist', () => {
      expect(TodoApp).toExist();
  });
});
