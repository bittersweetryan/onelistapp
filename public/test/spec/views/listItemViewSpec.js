define(
	[
		'views/listItemView'
	],
	function( ListItemView ){

		var listItemView;

		describe( 'List Item View', function( ){

			beforeEach( function(){
				listItemView = new ListItemView( { model : 'foo' } );
			} );
			
			it( 'should set the model on initialize', function(){

				expect( listItemView.model ).to.equal( 'foo' );
			} );

			it( 'should return something when calling render', function(){

				expect( listItemView.render( ) ).to.not.be.undefined;
			} );

			it( 'should respond to save item', function(){

				expect( listItemView ).to.respondTo( 'saveItem' );
			} );

			it( 'should respond to swap input', function(){

				expect( listItemView ).to.respondTo( 'swapInput' );
			} );
		} );
	}
);