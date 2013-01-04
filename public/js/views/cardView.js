define(
    [
        'jquery',
        'modernizr',
        'models/card',
        'views/listView',
        'familyonelist'
    ],
    function( $, Modernizr, Card, ListView, f1l ){

        var CardView = Backbone.View.extend({

            template : '#cardViewTemplate',

            model : new Card(),

            color : null,

            listView : null,

            events : {
                'click input[name="name"]' : 'stopScroll',
                'keypress input[name="name"]' : 'setName',
                'click' : 'showList',
                'click [data-id="name"]>span' : 'stopScroll'
            },

            initialize : function(){
                var $tpl = $(this.template),
                    self = this;

                if( $tpl.length ){ //needed for testing without a fixture
                    this.template = _.template( $tpl.html() );
                }

                this.listView = new ListView( this.model.get( 'items' ) );
            },

            render : function( card, color ){

                if( card !== undefined ){
                    this.model = card;
                }

                if( typeof this.template === 'function' ){
                    this.$el.html( this.template( this.model.toJSON( ) ) );
                }

                if( color ){
                    this.$el.find('.card').addClass( color );
                    this.$el.find( '[name =  "name"]' ).addClass( color );
                }
                
                this.$el.find(".list").append(
                    this.listView.render()
                );

                this.delegateEvents( );
            },

            setName : function( e ){
                var code = ( e.keyCode ? e.keyCode : e.which ),
                    nameField = this.$el.find( 'input[name="name"]' );

                 if( code === 13 ) {
                    
                    this.model.set( 'name', nameField.val() );
                    
                    nameField.replaceWith(
                        '<span>' + this.model.get( 'name' ) + '</span>'
                    );
                 }
            },

            showList : function(){
                var $container = this.$el.find('#innerContainer');

                if(Modernizr.csstransitions){
                    if($container.hasClass('left')){
                        $container.removeClass('left').addClass('right');
                    }
                    else{
                        $container.removeClass('right').addClass('left');
                    }
                }
                else{
                    if($container.hasClass('left-animate')){
                        $container.removeClass('left-animate').stop().animate(
                            {left: '0'}
                        );
                    }
                    else{
                        $container.addClass('left-animate').stop().animate(
                            {left: '-300'}
                        );
                    }
                }

                this.$el.find('input, #newItem').on('click',function(e){
                  e.stopImmediatePropagation();
                });
            },

            addItem : function( e ){
                this.stopScroll( e );

                this.card.get('items').add( );
            }
        });

        f1l.views.CardView = CardView;

        return CardView;
    }
);