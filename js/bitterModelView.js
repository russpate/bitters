var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');

module.exports = Backbone.View.extend({
  tagname:'article',
  className:'bitter-container',
  template: _.template(tmpl.bitterPost),
  initialize: function(){
    this.listenTo(this.collection, 'update', this.addAll);
    this.listenTo(this.collection, 'change', this.addAll);
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    console.log("markup", markup)
    return this;
  },
  events:{
    //listener delegation : function
    'click .bitter-options-delete':'bitterDelete',
    'click .bitter-options-edit':'bitterEdit'
  },
  bitterDelete: function(event){
    event.preventDefault();
    this.model.destroy();
  }
});
