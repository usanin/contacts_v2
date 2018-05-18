define.amd.dust = true;
define(['jquery', 'underscore', 'backbone', 'backboneValidation', 'dust', 'dustHelpers', 'routers/router',  'models/ContactModel', 'text!templates/template.contact.details.dust'],
    function ($, _, Backbone, BackboneValidation, dust, dustHelpers, router, ContactModel, contactDetailsTemplate) {
      var ContactDetailsView = Backbone.View.extend({
        el: $("#body"),
        tagName: "div",
        className: "container",
        template: contactDetailsTemplate,

        events: {
          'change': 'change',
          'click .save': 'save'
        },

        initialize: function (options) {
          options.model ? this.model = options.model : this.model = new ContactModel();
          this.model.set({isEdit : options.isEdit});
          BackboneValidation.bind(this);
        },

        change: function (event) {
          // Apply the change to the model
          var target = event.target;
          var change = {};
          change[target.name] = target.value;
          this.model.set(change);
        },

        render: function () {
          var compiled = dust.compile(this.template, 'contactDetails');
          dust.loadSource(compiled);
          dust.render('contactDetails', this.model.toJSON(), function (err, out) {
            this.$el.html(out).appendTo('body');
          }.bind(this));

          return this;
        },

        save: function () {
          var isValid = this.model.isValid(true);
          console.log("Is model valid: " + isValid);
          if (isValid) {
            this.model.save(null, {
              success: function (model) {
                console.log("saved: " + JSON.stringify(model.toJSON()));
                Backbone.history.navigate('contacts', true);
              }
            });
          }
        }
      });

      return ContactDetailsView;
});