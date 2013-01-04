define(
	[
		'jquery',
		'backbone',
		'familyonelist'
	],
	function( $, Backbone, f1l ){
		
		var ListView = Backbone.View.extend( {

			template : null,

			events : {
				
			},

			initialize : function(){
			}

		} );

		f1l.views.ListView = ListView;
		
		return ListView;
	}
);