requirejs(['knockoutjs', 'appViewModel', 'domReady!','jquery', 'sammy'], function (ko, appViewModel, $) {
    ko.applyBindings(new appViewModel());
});
