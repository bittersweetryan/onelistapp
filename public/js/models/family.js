define(
	[
		'familyonelist',
		'collections/cards'
	],
	function( familyonelist, Cards ){
		
		var Family = Backbone.Model.extend({

			defaults : {
				id : 0,
				name : '',
				cards : new Cards()
			}

		});

		return Family;
	}
);