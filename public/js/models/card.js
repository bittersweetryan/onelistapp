define(
	[
		'familyonelist'
	],
	function( familyonelist ){
		
		var Card = Backbone.Model.extend({

			defaults : {
				name : '',
				list : []
			},

			addItem : function( item ){
				this.get( 'list' ).push( item );
			}

		});

		return Card;
	}
);