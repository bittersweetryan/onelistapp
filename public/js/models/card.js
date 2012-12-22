define(
	[
		'familyonelist',
		'collections/items'
	],
	function( familyonelist, Items ){
		
		var Card = Backbone.Model.extend({

			defaults : {
				name : '',
				items : new Items()
			}

		});

		return Card;
	}
);