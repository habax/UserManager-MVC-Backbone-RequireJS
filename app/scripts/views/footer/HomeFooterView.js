define([
  'jquery',
  'backbone',
  'text!templates/home/homeFooterT.html'
], function($, Backbone, footerTemplate){
  var FooterView = Backbone.View.extend({
    el: $('.footer'),
    render: function(){
      this.$el.html(footerTemplate);
    }

  });

  return FooterView;
  
});