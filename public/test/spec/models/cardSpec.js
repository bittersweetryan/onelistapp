define(
	[
		'models/card',
		'collections/items'
	], 
	function( Card, Items ){
		
		var card;

		beforeEach( function(){
			card = new Card();
		} );

		describe( 'Card', function(){

			it( 'Should have a name property', function(){

				expect( card.get( 'name' ) ).to.not.be.undefined;
			} );

			it( 'Should have a items property', function(){

				expect( card.get( 'items' ) ).to.not.be.undefined;

				expect( card.get( 'items' ) ).to.be.an.instanceOf( Items );
			} );

		} );

	}
);