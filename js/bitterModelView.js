var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');

module.exports = Backbone.View.extend({
  tagName:'article',
  className:'bitter-container',
  template: _.template(tmpl.bitterPost),
  editTemplate: _.template(tmpl.bitterEdit),
  initialize: function(){
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
    'click .bitter-options-edit':'toggleEdit',
    'click .edit-bitter-save':'bitterEdit'
  },
  bitterDelete: function(event){
    event.preventDefault();
    this.model.destroy();
  },
  toggleEdit: function () {
    this.$el.html(this.editTemplate(this.model.toJSON()));
  },
  bitterEdit: function(event){
    event.preventDefault();
    this.model.set({
      name: this.$el.find('edit-bitter-input-name').val(),
      post: this.$el.find('edit-bitter-input-post').val()
    });
    this.model.save();
  }
});
