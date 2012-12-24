define(
	[
		'models/item'
	], 
	function( Item ){
		
		var Items = Backbone.Collection.extend( {

			model : Item
		} );

		return Items;
	}
);