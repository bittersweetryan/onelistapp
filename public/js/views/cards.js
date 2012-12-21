define(
	[
		'jquery',
		'backbone'
	],
	function( $, Backbone ){
			
		var CardsView = Backbone.View.extend({

			el : '#cards',

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