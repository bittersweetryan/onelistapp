define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/cards'
	],
	function( $, _, Backbone, Cards ){
		'use strict';

		var MainView = Backbone.View.extend({

			el : '#appView',

			events : {
				'click #newList' : 'addNew',
				'click #myBtn' : 'addNew'
			},

			initialize : function(){
				
			},

			cards : [

			],

			addNew : function(){
				Cards.create();
			}
		});

		return MainView;
	}
);