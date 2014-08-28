define([
  'jquery', 
  'underscore', 
  'backbone',
  'router'
], function($, _, Backbone, Router){

  /* 
   * La siguiente es una function que completará las llamadas ajax, debido a que no tenemos hosteado el 
   * ejemplo en nuestro servidor local, haremos uso de uno publico, justo para el ejericio
   */
  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
  });
  /* 
   * La siguiente es una function que nos permite serealizar objetos para enviarlos mediante ajax  
   */
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
  };

  var initialize = function(){
    //se inicializa el router de la aplicacion
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});