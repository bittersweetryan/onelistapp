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

			addCard : function( card ){

				var cardView = new f1l.views.CardView(  );

				cardView.render( card, this.getColor() );

				this.$el.append( cardView.$el );

				cardView.$el.find( '[name="name"]' ).focus();
			},

			getColor : function(){

				if( this.colorIndex >= this.colors.length ){
					this.colorIndex = 0;
				}

				return this.colors[ this.colorIndex++ ];
			}
		});

		f1l.views.CardsView = CardsView;

		return CardsView;
	}
);