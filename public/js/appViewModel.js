require.config({
    paths: {
        knockoutjs: 'dependencies/knockoutjs',
        Auth: 'entities/Auth'
    }
});
define(['knockoutjs'], function (ko) {
    return function appViewModel($, sammy) {
        var self = this;
        self.goToLogin = "/auth/login";
        self.email = "email@dogstudio.be";
        self.authLogin = function (element, valueAccessor, allBindingsAccessor) {
            console.log(element);
            console.log(valueAccessor);
            console.log(allBindingsAccessor);
        }
        var app = sammy('body', function () {
            this.before('/', function (context) {
                $.get('auth', function (bUser) {
                    if (!bUser) {
                        context.redirect('/auth/login');
                    }
                });
            });
            this.get('/', function () {
                console.log('home');
                context.render('index.php');
            });
            this.get('/auth/login', function (context) {
                console.log('login');

                self.authLogin = function () {
                    console.log(arguments);
                    require(['Auth'], function (Auth, arguments) {
                        new Auth(arguments);
                    });

                }
                self.email = "email@dogstudio.be";
                context.render('login', {email: self.email(), authLogin: self.authLogin()}).replace('body');
            });
            this.get('', function () {
                this.app.runRoute('get', '/');
            });

        });
        $(document).ready(function () {
            app.run();
        });
    };
});
