define(
	[
		'backbone'
	], 
	function( Backbone ){
		'use strict';

		var AppRouter = new Backbone.Router.extend({
			routes : {
				'' : 'home'
			},

			home : function(){
				console.log('home');
			}
		});

		return AppRouter;
	}
);