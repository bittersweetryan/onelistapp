define(
	[
		'views/cardView'
	],
	function( CardView ){

		var cardView;

		beforeEach( function(){
			cardView = new CardView();
		} );

		describe( 'Card View', function( ){

			it( 'should have a color property', function( ){
				expect( cardView.color ).to.not.be.undefined;
			} );
			
			it( 'should have a template property', function( ){
				expect( cardView.template ).to.not.be.undefined;
			} );

			it( 'should respond to stopScroll', function(){
				expect( cardView ).to.respondTo( 'stopScroll' );
			} );

			it( 'should respond to setName', function(){
				expect( cardView ).to.respondTo( 'setName' );
			} );

			it( 'should respond to showList', function(){
				expect( cardView ).to.respondTo( 'showList' );
			} );

			it( 'should resond to change name', function(){
				expect( cardView ).to.respondTo( 'changeName' );
			});

			it( 'should respond to close card', function(){
				expect( cardView ).to.respondTo( 'closeCard' );
			});

		} );

		return ;
	}
);