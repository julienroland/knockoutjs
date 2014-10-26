function Validator(aInput, aRules, $target) {
    console.log('validator');
    var sType = 'multiple';
    if (typeof $target !== "undefined") {
        sType = 'single';
    }
    $.ajax({
        url: '/form/validate',
        type: "POST",
        data: {'input': aInput, 'rules': aRules},
        success: function (oData) {
            require(['validatorMessage'], function () {
                var message = new Message();
                if (sType === 'single') {
                    message.single($target, oData);
                } else {
                    message.multiple(oData);
                }
            });
        }
    });

}
