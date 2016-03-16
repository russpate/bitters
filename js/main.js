var Backbone = require('backbone');
var $ = require('jquery');
var Routes = require('./routes');

$(document).ready(function () {
  new Routes();
  Backbone.history.start({pushstate: true});
});
