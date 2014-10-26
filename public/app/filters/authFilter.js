function authFilter() {
    require(['hasher', 'authEntity'], function (hasher) {
        var user = new Auth();
        var isAuth;
        user.check(function (boolean) {
            isAuth = boolean;
        });
        if (!isAuth && typeof isAuth !== "undefined") {
            hasher.replaceHash('/auth/login');
        }
    })
}

