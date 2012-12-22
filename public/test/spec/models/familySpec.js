define(
	[
		'models/family',
		'collections/cards'
	], 
	function( Family, Cards ){
		
		var family;

		beforeEach( function(){
			family = new Family();
		} );

		describe( 'Family', function(){

			it( 'Should have a name property', function(){

				expect( family.get( 'name' ) ).to.not.be.undefined;
			} );

			it( 'Should have a id property', function(){

				expect( family.get( 'id' ) ).to.not.be.undefined;

				expect( family.get( 'id' ) ).to.be.a( 'Number' );
			} );

			it( 'Should have a cards property', function(){

				expect( family.get( 'cards' ) ).to.not.be.undefined;

				expect( family.get( 'cards' ) ).to.be.an.instanceOf( Cards );
			} );
			
		} );

	}
);