define(['knockout', 'text!./login.html', 'hasher', 'authEntity', 'validator'], function (ko, templateMarkup, hasher) {
    function Login(params) {
        this.email = ko.observable();
        this.validate = function (data, $event) {
            var $target = $($event.target);
            var $name = $target.attr('name');

            var aInput = {};
            aInput[$name] = this.email()
            var aRules = {};
            aRules[$name] = new Auth().rules[$name];
            new Validator(aInput, aRules, $target);

        }
        this.authLogin = function () {
            $.post('/auth/login', $(arguments).serialize(), function (oData) {
                if (oData) {
                    hasher.setHash('');
                }
            });
        }
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    Login.prototype.dispose = function () {
    };

    return {viewModel: Login, template: templateMarkup};

});
