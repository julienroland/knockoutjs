define(['Auth'], function () {
    console.log('ok');
    return function AuthEntities(arguments) {
        console.log('ok');
        $.post('/auth/login', $(arguments).serialize(), function (oData) {
            console.log(oData);
        });
    }

});
