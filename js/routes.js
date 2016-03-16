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
    var bitFormView = new BitterFormView();
    var bitterCol = new BitterCollection();
    // var addFormContent = new BitterFormView({collection:bitterCol});
    bitterCol.fetch().then(function (data) {
        console.log(bitterCol.models.length, "data", data);
        // data is ready
        var collection = new BitterCollection(data);
        console.log("collection", collection)
        that.renderSubview(new BitterCollectionView({collection: collection}));
      });
    },
    renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
