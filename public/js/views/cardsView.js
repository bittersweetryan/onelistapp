define(
	[
		'jquery',
		'backbone',
		'familyonelist'
	],
	function( $, Backbone, f1l ){
			
		var CardsView = Backbone.View.extend({

			el : '#cards',

			initialize : function( ){
				f1l.collections.cards.on( 'add', this.addCard, this );
			},

			events : {
				
			},

			//colors keeps track of the colors that have been added
			colors : [
				'blue',
				'green',
				'yellow',
				'orange',
				'red'
			],

			colorIndex : 0,

			addCard : function(  ){
				var cardView = new f1l.views.CardView(  );

				cardView.render( f1l.collections.cards.pop(), this.colors[ this.colorIndex++ ] );

				this.$el.append( cardView.$el );
			}
		});

		f1l.views.CardsView = CardsView;

		return CardsView;
	}
);