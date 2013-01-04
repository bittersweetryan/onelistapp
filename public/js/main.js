define(
	[
		'jquery',
		'familyonelist',
		'models/card',
		'models/item',
		'collections/cards',
		'collections/items',
		'views/listView',
		'views/appView',
		'views/cardView',
		'views/cardsView'
	],

	function( $, f1l ) {
		'use strict';
		f1l.init();

		var appView = new f1l.views.AppView();
		var cardsView = new f1l.views.CardsView();
	}
);
