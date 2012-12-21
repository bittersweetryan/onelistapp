define(
	[
		'models/card'
	], 
	function( Card ){
		
		var card;

		beforeEach( function(){
			card = new Card();
		} );

		describe( 'Card', function(){

			it( 'Should have a name property', function(){

				expect( card.get( 'name' )).to.not.be.undefined;
			} );

			it( 'Should have a list property', function(){

				expect( card.get( 'list' )).to.not.be.undefined;

				expect( card.get( 'list' )).to.be.a( 'Array' );
			} );

			it( 'Should respond to addItem', function(){

				expect( card ).to.respondTo( 'addItem' );
			} );
		} );

	}
);