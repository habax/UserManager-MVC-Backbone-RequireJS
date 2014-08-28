define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homePageT.html'
], function($, _, Backbone,  homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $(".page"),

    render: function(){
      // draw content
      this.$el.html(homeTemplate);
    }

  });

  return HomeView;
  
});