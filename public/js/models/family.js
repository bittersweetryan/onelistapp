define(
	[
		'familyonelist'
	],
	function( familyonelist ){
		
		var Family = Backbone.Model.extend({

			defaults : {
				id : 0,
				name : '',
				cards : []
			},

			addCard : function( card ){
				this.get( 'cards' ).push( card );
			}

		});

		return Family;
	}
);