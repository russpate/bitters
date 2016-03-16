var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');

module.exports = Backbone.View.extend({
  className:'new-bitter-form',
  template: _.template(tmpl.newBitterForm),
  initialize: function(){
    this.$el.append(this.render());
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  events:{
    //listener delegation : function
    'click .create-bitter-submit':'bitterSubmit'
  },
  bitterSubmit: function(event){
    this.model.save({
    name: this.$el.find('.create-bitter-input-name').val(),
    post: this.$el.find('.create-bitter-input-post"]').val()
  });
  this.$el.find('input').val('');
  this.collection.add(this.model);
}
});
