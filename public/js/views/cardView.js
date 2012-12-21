define(
	[
		'models/card'
	],
	function( Card ){
		
		var CardView = Backbone.View.extend({

			template : '#cardViewTemplate',

			model : Card,

			initialize : function(){

			}
		});

		return CardView;
	}
);