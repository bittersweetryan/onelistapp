define([
  'jquery',
  'underscore',
  'backbone',
  'modernizr'
],

function( $, _, Backbone, Modernizr ) {
  'use strict';

  var familyonelist = {
    root: '/',

    models : {},

    views : {},

    collections : {},

    init : function( ){
      
      this.setupFoundation();

    },

    setupFoundation : function(){

      var $doc = $(document);

      $(document).ready(function() {

        $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
        $.fn.foundationButtons          ? $doc.foundationButtons() : null;
        $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
        $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
        $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
        $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
        $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
        $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
        $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
        $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
        $.fn.foundationClearing         ? $doc.foundationClearing() : null;

        $.fn.placeholder                ? $('input, textarea').placeholder() : null;
      });

      // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
      if (Modernizr.touch && !window.location.hash) {
        $(window).load(function () {
          setTimeout(function () {
            window.scrollTo(0, 1);
          }, 0);
        });
      }
    }
  };

  return familyonelist;

});
