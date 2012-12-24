define(
	[
		'jquery',
		'familyonelist',
		'views/appView',
		'views/cardsView'
	],

	function( $, f1l ) {
		'use strict';
		
		f1l.init();

		var appView = new f1l.views.AppView();
		var cardsView = new f1l.views.CardsView();
	}
);
