define(
	[
		'jquery',
		'backbone'
	],
	function( $, Backbone ){
			
		var CardsView = Backbone.View.extend({

			el : '#cards',

			initialize : function( ){

			},

			//colors keeps track of the colors that have been added
			colors : [
				'blue',
				'green',
				'yellow',
				'orange',
				'red'
			],

			colorIndex : 0,

			addCard : function( Card ){
				
			}
		});

		return CardsView;
	}
);