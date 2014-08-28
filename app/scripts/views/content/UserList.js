define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/usersmanager/list.html',
  'collections/Users'
], function($, _ , Backbone, homeTemplate , Users ){

  var UserList = Backbone.View.extend({
        el: '.page',
        initialize : function(){
          
        },
        render: function() {
          users = new Users();
          var that = this;
          users.fetch({
            success: function(users){

              var data = {users: users.models};
              var template =  _.template(homeTemplate );
              var resTemplate = template(data);
              that.$el.html(resTemplate);

            }
          });
        }
      });

  return UserList;
  
});