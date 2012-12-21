define(
	[
		'jquery',
		'familyonelist',
		'views/mainView',
		'views/cardView'
	],

	function( $, familyonelist, MainView, CardView ) {
		'use strict';
		
		familyonelist.init();
	}
);
