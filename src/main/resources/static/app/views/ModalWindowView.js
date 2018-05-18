define.amd.dust = true;
define(['jquery', 'underscore', 'backbone', 'dust', 'bootstrap', 'text!templates/template.modal.dust'],
    function ($, _, Backbone, dust, bootstrap, modalTemplate) {
        var ModalWindowView = Backbone.View.extend({
            tagName: "div",
            id: "confirmModal",
            className: "modal fade",
            template: modalTemplate,

            events: {
                "click .btn-danger": "runCallBack"
            },
            initialize: function (options) {
              var that = this;
                this.cb = options.cb;
                $(document).on('hide.bs.modal','#confirmModal', function () {
                    that.removeModal();
                })
            },
            render: function () {
                var compiled = dust.compile(this.template, 'modal');
                dust.loadSource(compiled);
                dust.render('modal', this.model.toJSON(), function (err, out) {
                    this.$el.html(out).modal("show");
                }.bind(this));

                return this;
            },
            close: function () {
                this.$el.modal("close");
            },
            runCallBack: function () {
                this.cb();
            },
            removeModal: function () {
              this.remove();
            }
        });
        return ModalWindowView;
    });