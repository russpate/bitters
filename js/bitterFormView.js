var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var BitModel = require('./model');

module.exports = Backbone.View.extend({
  collection:null,
  el:'.new-bitter-form',
  template: _.template(tmpl.newBitterForm),
  initialize: function(){
    console.log("this.$el", this.$el)
    this.listenTo(this.model, 'change', this.addAll);
    this.listenTo(this.model, 'update', this.addAll);
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
  var newBitter = new BitModel(newBitter);
  this.$el.find('input').val('');
  newBitter.save();
}
});
