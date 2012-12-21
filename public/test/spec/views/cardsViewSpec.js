define(
	[
		'views/cardsView'
	], 
	function( CardsView ){

		var cardsView;

		beforeEach( function(){
			cardsView = new CardsView();
		} );

		describe( 'cards view', function( ){

			it( 'should have a colors property', function( ){
				expect( cardsView.colors ).to.not.be.undefined;
			} );

			it( 'should respond to addCard', function( ){
				expect( cardsView ).to.respondTo( 'addCard' );
			} );
		} );

		return ;
	}
);