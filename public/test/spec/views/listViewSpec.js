define(
	[
		'views/listView'
	],
	function( ListView ){

		describe( 'List View', function(){

			var listView;

			beforeEach( function(){
				listView = new ListView();
			} );

			it( 'should respond to add item', function(){

				expect( listView ).to.respondTo( 'addItem' );
			} );

			it( 'should return the element when calling render', function(){

				expect( listView.render() ).to.not.be.undefined;
			} );
		} );
	}
);