define(['jquery', 'underscore', 'backbone', 'backboneValidation'], function ($, _, Backbone, backboneValidation) {
  var Contact = Backbone.Model.extend({
    url: function () {
      return "/api/contacts" + (this.has("id") ? "/" + this.get("id") : "");
    },
    defaults: {
      id: null,
      name: '',
      phone: '',
      group: '',
      picture: 'pics/Steven_Wells.jpg'
    },

    validation: {
      name: {
        required: true,
        rangeLength: [2, 20]
      },
      phone: {
        required: true,
        pattern: /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
      },
      group: {
        required: true,
        oneOf: ['Family', 'Job', 'Friends']
      }
    }
  });

  return Contact;
});