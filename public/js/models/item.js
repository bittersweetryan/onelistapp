define(
	[
		'familyonelist'
	], 
	function( familyonelist ){
		
		var Item = Backbone.Model.extend({

			defaults: {
				itemName : '',
				purchased : false
			}
		});

		return Item;
	}
);