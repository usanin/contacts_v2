define.amd.dust = true;
define(['jquery', 'underscore', 'backbone', 'dust', 'collections/Contacts', 'views/ContactView', 'text!templates/template.contacts.dust'],
    function ($, _, Backbone, dust, Contacts, ContactView, contactsTemplate)
{
  var ContactsView = Backbone.View.extend({
    el: $("#body"),
    template: contactsTemplate,

    initialize: function (contacts) {
      this.collection = contacts;
      //this.render();
    },

    render: function () {
      this.renderContactsContainer();
      var that = this;
      _.each(this.collection.models, function (item) {
        that.renderContact(item);
      });
      return this;
    },

    renderContact: function (item) {
      var contactView = new ContactView({
        model: item
      });
      $('#contacts').append(contactView.render().el);
    },

    renderContactsContainer: function () {
      var compiled = dust.compile(this.template, 'contactsTemplate');
      dust.loadSource(compiled);
      dust.render('contactsTemplate', {}, function (err, out) {
        this.$el.html(out).appendTo('body');
      }.bind(this));
    }

  });

  return ContactsView;
});