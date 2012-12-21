define(
	[
		'familyonelist'
	],
	function( familyonelist ){
		
		var Card = Backbone.Model.extend({

			defaults : {
				name : '',
				list : []
			}

		});

		return Card;
	}
);