define(
	[
		'jquery',
		'backbone',
		'familyonelist'
	],
	function( $, Backbone, f1l ){
		
		var ListItemView = Backbone.View.extend( {

			template : '#listItem',

			events : {
				'click input' : 'stopScroll',
				'keyup input' : 'saveItem'
			},

			initialize : function(  ){
				var $tpl = $( this.template );

				if( $tpl.length ){
					this.template = _.template( $tpl.html() );
				}
			},

			render : function( ){
				
				if( typeof this.template === 'function' ){
					
					this.$el.html( this.template( ) );
				}

				return this.el;
			},

			saveItem : function( e ){
				var code = ( e.keyCode ? e.keyCode : e.which ),
					name = null;

				if( code === 13 ){

					name = $(e.currentTarget).val( );

					this.model.set( 'name', name );

					this.swapInput( name );
				}
			},

			swapInput : function( name ){

				//if name is a string it was triggered by saveItem
				if( typeof name === 'string' ){
					this.$el.find( 'input' ).replaceWith( name );
				}
			}

		} );

		return ListItemView;
	}
);