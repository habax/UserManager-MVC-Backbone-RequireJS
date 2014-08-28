define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/usersmanager/edit.html',
  'models/User'
], function($, _, Backbone,  editTemplate , User){

    var routerApp = null;

    var EditUser = Backbone.View.extend({
      el: '.page',
      render : function(options){
        var that= this;
        that.template = _.template(editTemplate);
        routerApp = options.router;
        if(options.id){
          // GET renquest
          that.user = new User({id: options.id});
          that.user.fetch({
            success: function (userget){
              var resTemplate = that.template({user: userget});
              that.$el.html(resTemplate);
            }
          });
        }else{
          var resTemplate = that.template({user: null});
          this.$el.html(resTemplate);  
        }
      },
      events: {
        
        'submit .edit-user-form': 'saveUser',
        'click .delete': 'deleteUser',
        'click .cancelar': 'cancelUser'
        
      },
      saveUser: function(ev){
        var userDetails = $(ev.currentTarget).serializeObject();
        var user = new User();
        user.save(userDetails, {
          success: function(user){
            routerApp.navigate('',{trigger: true});
          }
        });
        return false;
      },
      deleteUser : function(ev){
        this.user.destroy({
          success: function(){
            routerApp.navigate('',{trigger: true});
          }
        });
        return false;
      },
      cancelUser : function(ev){
        routerApp.navigate('',{trigger: true});
        return false;
      }
      
    });

  return EditUser;
  
});