define(['jquery', 'underscore', 'backbone', 'models/ContactModel'], function ($, _, Backbone, Contact) {
  return Backbone.Collection.extend({
    url: "/api/contacts",

    model: Contact
  });
});