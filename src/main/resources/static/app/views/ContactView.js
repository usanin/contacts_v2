define.amd.dust = true;
define(['jquery', 'underscore', 'backbone', 'dust', 'views/ModalWindowView', 'text!templates/template.contact.dust'],
    function ($, _, Backbone, dust, ModalWindowView, contactTemplate)
{
  var ContactView = Backbone.View.extend({
    tagName: "div",
    className: "card col-sm-3 text-center contact-clock",
    template: contactTemplate,

    events: {
      'click .delete': 'openModal'
    },

    initialize: function () {
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
      var compiled = dust.compile(this.template, 'contact');
      dust.loadSource(compiled);
      dust.render('contact', this.model.toJSON(), function (err, out) {
        this.$el.html(out);
      }.bind(this));

      return this;
    },

    destroy: function () {
      this.model.destroy({
        'id': this.model.id
      });
    },
    
    openModal: function () {

        var that = this;
        var confirmModal = new ModalWindowView({
            model: this.model,
            cb: function(){
                that.destroy();
            }
        });
        confirmModal.render();
    }
  });

  return ContactView;
});