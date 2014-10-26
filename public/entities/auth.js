function Auth() {
    this.rules = {
        'email': 'required | email | min:5',
        'password': 'required'
    };

    this.check = function (callback) {
        return $.ajax({
            url: '/auth/login/check',
            async: false,
            type: "POST",
            data: $(arguments).serialize(),
            success: callback
        });
    }
}
