define(
	[
		'models/item',
		'familyonelist'
	],
	function( Item, f1l ){
		
		var Items = Backbone.Collection.extend( {

			model : Item
		} );

		return Items;
	}
);