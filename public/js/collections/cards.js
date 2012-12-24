define(
	[
		'models/card'
	],
	function( Card ){
		
		var Cards = Backbone.Collection.extend({

			model : Card
		});

		return Cards;
	}
);