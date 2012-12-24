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

		} );

		return ;
	}
);