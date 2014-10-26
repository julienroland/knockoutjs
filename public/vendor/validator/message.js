function Message() {
    this.single = function ($target, oMessages) {
        if (oMessages === true) {
            console.log('true');
            this.singleSuccess($target);
        } else if (typeof oMessages !== "undefined") {
            this.singleError(oMessages, $target);
        }
    };

    this.multiple = function (oMessages) {
        console.log(oMessages);
    }

    this.singleSuccess = function ($target) {
        $target.siblings('.single-errors').remove();
        $target.removeClass('alert-danger').addClass('alert-success');
    }
    this.singleError = function (oMessages, $target) {
        oData = '';
        $.each(oMessages, function (key, value) {
            $.each(value, function (key, value) {
                oData += '<li>' + value + '</li>';
            })
        });
        $target.siblings('.single-errors').remove();
        $target.after('<ul class="single-errors alert alert-danger">' + oData + '</ul>');
        $target.addClass('alert-danger');
    }
}
