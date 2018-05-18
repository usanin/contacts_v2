require.config({
    paths: {
        jquery: '../vendors/jquery-3.2.1',
        jqueryUI: '../vendors/jquery-ui',
        bootstrap: '../vendors/bootstrap',
        underscore: '../vendors/underscore',
        backbone: '../vendors/backbone',
        backboneValidation: '../vendors/backbone-validation-amd',
        backboneBabysitter: '../vendors/backbone.babysitter',
        dust: '../vendors/dust-full',
        dustHelpers: '../vendors/dust-helpers',
        lodash: '../vendors/lodash.min',
        text: '../vendors/text'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'backboneValidation', 'backboneBabysitter', 'routers/router'],
    function ($, _, Backbone, BackboneValidation, BackboneBabysitter, ContactsRouter) {

      new ContactsRouter();
      Backbone.history.start();
      extendBackboneValidation(BackboneValidation);

});

function extendBackboneValidation(BackboneValidation) {
  _.extend(BackboneValidation.callbacks, {
    valid: function (view, attr, selector) {
      var $el = view.$('[name=' + attr + ']'),
          $group = $el.closest('.form-group');

      $group.removeClass('has-error');
      $group.find('.help-block').html('').addClass('hidden');
    },
    invalid: function (view, attr, error, selector) {
      var $el = view.$('[name=' + attr + ']'),
          $group = $el.closest('.form-group');

      $group.addClass('has-error');
      $group.find('.help-block').html(error).removeClass('hidden');
    }
  });
}