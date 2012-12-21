define(
	[
		'familyonelist'
	], 
	function( familyonelist ){
		
		var Family = Backbone.Model.extend({

			defaults : {
				id : '',
				name : '',
				members : []
			}
		});

		return Family;
	}
);