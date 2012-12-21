define(
	[
		'familyonelist'
	], 
	function( familyonelist ){
		
		var Item = Backbone.Model.extend({

			defaults: {
				name : '',
				purchased : false
			},

			toggle : function(){

				this.set( 'purchased', !this.get( 'purchased' ) );
			}
		});

		return Item;
	}
);