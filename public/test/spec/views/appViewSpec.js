define(
	[
		'views/appView'
	],
	function( AppView ){

		var appView;

		describe( 'App View', function( ){

			beforeEach( function(){
				appView = new AppView();
			} );

			it( 'Should respond to addList', function(){

				expect( appView ).to.respondTo( 'addList' );
			} );

		} );

		return ;
	}
);