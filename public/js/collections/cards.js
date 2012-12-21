define(
	[
		'familyonelist'
	], 
	function( familyonelist ){
		
		var Cards = Backbone.Collection.extend({

			model : Card
		});

		return Cards;
	}
);