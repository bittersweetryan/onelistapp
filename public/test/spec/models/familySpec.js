define(
	[
		'models/family'
	], 
	function( Family ){
		
		var family;

		beforeEach( function(){
			family = new Family();
		} );

		describe( 'Family', function(){

			it( 'Should have a name property', function(){

				expect( family.get( 'name' )).to.not.be.undefined;
			} );

			it( 'Should have a id property', function(){

				expect( family.get( 'id' )).to.not.be.undefined;

				expect( family.get( 'id' )).to.be.a( 'Number' );
			} );

			it( 'Should have a cards property', function(){

				expect( family.get( 'cards' )).to.not.be.undefined;

				expect( family.get( 'cards' )).to.be.a( 'Array' );
			} );

			it( 'Should respond to addCard', function(){

				expect( family ).to.respondTo( 'addCard' );
			} );
		} );

	}
);