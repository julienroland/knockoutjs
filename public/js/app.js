require.config({
    paths: {
        knockoutjs: 'dependencies/knockoutjs',
        jquery: 'dependencies/jquery',
        sammy: 'dependencies/sammy',
        auth: 'entities/Auth'
    }
});
require(['knockoutjs', 'appViewModel','jquery', 'sammy'], function (ko, appViewModel, $, Sammy) {
    ko.applyBindings(new appViewModel($, Sammy));
});


