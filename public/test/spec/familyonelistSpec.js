define(
	[
		'familyonelist'
	], 
	function( familyonelist ){
		
		describe( 'familyonelist application', function( ){

			it( 'should respond to init', function( ){

				expect( familyonelist ).to.respondTo( 'init' );
			} );
		} );
	}
);