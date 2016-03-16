var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var BitModel = require('./model');

module.exports = Backbone.View.extend({
  el:'.new-bitter-form',
  template: _.template(tmpl.newBitterForm),
  initialize: function(){
    console.log("this.$el", this.$el)
    this.render();
  },
  render: function(){
    var markup = this.template();
    console.log("markup", markup)
    this.$el.html(markup);
    return this;
  },
  events:{
    //listener delegation : function
    'click .create-bitter-submit':'bitterSubmit'
  },
  bitterSubmit: function(event){
    event.preventDefault();
    var newBitter = {
    name: this.$el.find('.create-bitter-input-name').val(),
    post: this.$el.find('.create-bitter-input-post').val()
  };
    console.log("newBitter", newBitter);
    console.log("bitModel", BitModel);
  var newBitter = new BitModel(newBitter);
  this.$el.find('input').val('');

  newBitter.save();

}
});
