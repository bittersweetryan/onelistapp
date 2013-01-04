define(
	[
		'views/cardsView'
	], 
	function( CardsView ){

		var cardsView;

		beforeEach( function(){
			cardsView = new CardsView();
		} );

		describe( 'Cards View', function( ){

			it( 'should have a colors property', function( ){
				expect( cardsView.colors ).to.not.be.undefined;
			} );

			it( 'should respond to add card', function(){

				var currentColor = cardsView.colorIndex;

				expect( cardsView ).to.respondTo( 'addCard' );

				cardsView.addCard();
				
				expect( currentColor ).to.not.equal( cardsView.colorIndex );
			} );

			it( 'should respond to getColor and return to first color when all colors are picked', function(){
				var firstColor = cardsView.colors[ 0 ];

				expect( cardsView ).to.respondTo( 'getColor' );

				cardsView.colorIndex = cardsView.colors.length;

				expect( cardsView.getColor() ).to.equal( firstColor );

			} );

		} );

		return ;
	}
);