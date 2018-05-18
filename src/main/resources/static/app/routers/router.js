define(['jquery', 'underscore',	'backbone', 'views/ContactsView', 'views/ContactDetailsView','collections/Contacts', 'models/ContactModel'],
    function ($, _, Backbone, ContactsView, ContactDetailsView, Contacts, Contact) {
      var ContactsRouter = Backbone.Router.extend({

        routes: {
          '': 'contacts',
          'contacts': 'contacts',
          'add': 'add',
          'edit/:id': 'edit'
        },

        contacts: function () {
          var self = this;
          this.removeCurrentView();
          var contactsList = new Contacts();
          contactsList.fetch({
            success:function () {
              var v = new ContactsView(contactsList);
              self.renderView(v);
            }});
        },

        add: function () {
          this.removeCurrentView();
          var v = new ContactDetailsView({
            isEdit : false
          });
          this.renderView(v);
        },

        edit: function (id) {
          var self = this;
          this.removeCurrentView();
          var contact = new Contact({'id' : id});
          contact.fetch({
            success:function () {
              var v = new ContactDetailsView({
                isEdit : true,
                model : contact
              });
              self.renderView(v);
            }
          });
        },

        removeCurrentView: function () {
          if(this.currentView){
            this.currentView.remove();
          }
        },

        renderView : function (view) {
          this.currentView = view;
          view.render();
        }

      });

      return ContactsRouter;
    });