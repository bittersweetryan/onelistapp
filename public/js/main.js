define(
	[
		'jquery',
		'backbone',
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

	function( $, Backbone, f1l ) {
		'use strict';
		f1l.init();


		Backbone.View.prototype.stopScroll = function( e ){
                e.stopImmediatePropagation();
                e.preventDefault();
		};

		var appView = new f1l.views.AppView();
		var cardsView = new f1l.views.CardsView();
	}
);
