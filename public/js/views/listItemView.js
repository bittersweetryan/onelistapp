define(
	[
		'jquery',
		'backbone',
		'familyonelist'
	],
	function( $, Backbone, f1l ){
		
		var ListItemView = Backbone.View.extend( {

			template : null,

			events : {
				
			},

			initialize : function(){

			}

		} );

		return ListItemView;
	}
);