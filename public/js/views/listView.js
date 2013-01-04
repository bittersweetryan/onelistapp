define(
	[
		'jquery',
		'backbone',
		'views/listItemView'
	],
	function( $, Backbone, ListItemView ){
		
		var ListView = Backbone.View.extend( {

			template : '#list',

			items : null,

			events : {
				'click [data-id="newItem"]' : 'addItem'
			},

			initialize : function( items ){

				if( items ){
					this.items = items;
				}

				var $tpl = $(this.template);

				if( $tpl.length ){
					this.template = _.template( $tpl.html() );
				}

			},

			render : function(  ){

				//populate a preexisiting list
				if( typeof this.template === 'function' ){
					this.$el.html( this.template() );
				}

				return this.el;
			},

			addItem : function( e ){

				this.stopScroll( e );
				
				this.$el.find( '[data-id="listItems"]' ).prepend(
					new ListItemView(
						{ model : this.items.add( ).pop( ) }
					).render( )
				)
				.end()
				.find( 'input:first' ).focus( );
			}

		} );
		
		return ListView;
	}
);