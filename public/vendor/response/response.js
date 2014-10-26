define(['jquery', 'knockout', 'helpers'], function ($, ko, Helpers) {
    return function (sResponse) {
        var self = this;
        self.sResponse = sResponse;
        self.errors = function (callback) {
            if (typeof self.sResponse.errors !== "undefined") {
                callback(self.sResponse.errors);
            }
            return self;
        }
        self.success = function (callback) {
            if (typeof self.sResponse.success !== "undefined") {
                callback(self.sResponse.success);
            }
            return self;
        }
        self.got = function (callback) {
            if (typeof self.sResponse !== "undefined") {
                callback(true);
            } else {
                callback(false);
            }
            return self;
        }
        self.hasErrors = function () {
            if (typeof sResponse.errors === "undefined") {
                return true;
            }
            return false;
        }
        self.getErrors = function () {
            return self.sResponse.errors;
        }
        self.hasSuccess = function () {
            if (typeof sResponse.success === "undefined") {
                return true;
            }
            return false;
        }
        self.getSuccess = function () {
            return self.sResponse.success;
        }
    }
});
