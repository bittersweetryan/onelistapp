define(
	[
		'jquery',
		'backbone',
		'familyonelist'
	],
	function( $, Backbone, f1l ){
		
		var AppView = Backbone.View.extend( {

			el : '#appView',

			events : {
				'click #newList' : 'addList'
			},

			initialize : function(){

			},

			addList : function(){
				f1l.collections.cards.add( );
			}

		} );

		f1l.views.AppView = AppView;

		return AppView;
	}
);