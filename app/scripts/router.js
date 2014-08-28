define([
  'jquery',
  'underscore',
  'backbone',
  'views/header/HomeHeaderView',
  'views/content/HomeView',
  'views/content/UserList',
  'views/content/EditUser',
  'views/footer/HomeFooterView'
], function($, _, Backbone , HomeHeaderView , HomeView , UserList , EditUser , HomeFooterView ) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Definicion de las paginas y de como trabajaran
      '':'home',
      'new':'editUser',
      'edit/:id' : 'editUser',
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    var header = new HomeHeaderView();
    var footer = new HomeFooterView();
    var userList = new UserList();
    var editUser = new EditUser();

    // header
    header.render();

    // content
    app_router.on('route:home', function () {
        userList.render();
    })
    .on('route:editUser', function (id) {
        editUser.render({id:id , router: app_router});
    });

    // footer
    footer.render();
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});