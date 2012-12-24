define(
	[
		'jquery',
		'backbone',
		'familyonelist',
		'views/cardView'
	],
	function( $, Backbone, f1l, CardView ){
		
		var AppView = Backbone.View.extend( {

			el : '#appView',

			events : {
				'click #newList' : 'addList'
			},

			initialize : function(){

			},

			addList : function(){
				
				f1l.collections.cards.add( {
					name : 'Ayden'
				} );
			}

		} );

		f1l.views.AppView = AppView;

		return AppView;
	}
);