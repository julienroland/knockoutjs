// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap": "bower_modules/components-bootstrap/js/bootstrap.min",
        "crossroads": "bower_modules/crossroads/dist/crossroads.min",
        "hasher": "bower_modules/hasher/dist/js/hasher.min",
        "jquery": "bower_modules/jquery/dist/jquery",
        "knockout": "bower_modules/knockout/dist/knockout",
        "tweenlite": "js/tweenlite",
        "tab": "js/tab",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals": "bower_modules/js-signals/dist/signals.min",
        "text": "bower_modules/requirejs-text/text",
        /* *
         * Filers
         *
         * */
        "filters": "app/filters/filters",
        "authFilter": "app/filters/authFilter",
        "guestFilter": "app/filters/guestFilter",
        /* *
         * Entites
         *
         * */
        "authEntity": "entities/auth",
        /* *
         * Class
         *
         * */
        "validatorMessage": "vendor/validator/message",
        "validator": "vendor/validator/validator",
        "tabs": "vendor/tabs/tabs",
        "response": "vendor/response/response",
        /* *
         * Helpers
         *
         * */
        "helpers": "helpers/helpers"
    },
    shim: {
        "bootstrap": {deps: ["jquery"]},
        "tabs": {deps: ["jquery", "tab","knockout"]},
        "helpers": {deps: ["jquery"]},
        "validator": {deps: ["jquery"]},
        "authEntity": {deps: ["jquery"]},
        "response": {deps: ["jquery"]}
    }
};
