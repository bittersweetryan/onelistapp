define(
	[
		'models/item'
	], 
	function( Item ){
		
		var item;

		beforeEach( function(){
			item = new Item();
		} );

		describe( 'Item', function(){

			it( 'Should have a name property', function(){

				expect( item.get( 'name' )).to.not.be.undefined;
			} );

			it( 'Should have a purchased property', function(){

				expect( item.get( 'purchased' )).to.not.be.undefined;

				expect( item.get( 'purchased' )).to.be.a( 'Boolean' );
			} );

			it( 'Should respond to toggle', function(){

				expect( item ).to.respondTo( 'toggle' );

				item.set( 'purchased', false );

				item.toggle();

				expect( item.get( 'purchased' ) ).to.be.true;

				item.toggle();

				expect( item.get( 'purchased' ) ).to.be.false;
			} );
		} );

	}
);