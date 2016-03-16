var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection')
var BitterCollectionView = require('./bitterCollectionView')
var BitterFormView = require('./bitterFormView')


module.exports = Backbone.Router.extend({
  subview:null,
  routes:{
    "":"home",
    "home":"home"
  },
  home:function(){
    var that = this; // constructor context
    var bitterCol = new BitterCollection();
    bitterCol.fetch().then(function (data) {
        console.log(bitterCol.models.length);
        // data is ready
        that.renderSubview(new BitterCollectionView({collection: bitterCol}));
      });
    },
    renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
