define(
	[
		'models/card',
		'familyonelist'
	],
	function( Card, f1l ){
		
		var Cards = Backbone.Collection.extend({

			model : Card
		});

		f1l.collections.cards = new Cards();

		return Cards;
	}
);