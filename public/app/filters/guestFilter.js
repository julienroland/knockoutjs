function guestFilter() {
    require(['hasher', 'authEntity'], function (hasher) {
        var user = new Auth();
        var isAuth;
        user.check(function (boolean) {
            isAuth = boolean;
        });
        if (isAuth && typeof isAuth !== "undefined") {
            console.log(document.referrer);
            hasher.replaceHash('/');
        }
    })
}

