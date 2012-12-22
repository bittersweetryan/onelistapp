define(
	[
		'models/card',
		'familyonelist'
	],
	function( familyonelist, Card ){
		
		var Cards = Backbone.Collection.extend({

			model : Card
		});

		return Cards;
	}
);