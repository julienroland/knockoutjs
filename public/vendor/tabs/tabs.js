define(['jquery', 'knockout', 'helpers'], function ($, ko, Helpers) {
    return function ($selector, oParams) {
        //init
        //$($selector).tabulous({effect: 'scale'});
        var self = this;

        self.tabs = ko.observableArray();
        self.nbTabs = ko.observable(0);
        self.add = function (oParams) {
            self.nbTabs(self.nbTabs() + 1);
            self.tabs.push(new Helpers().merge(oParams, {tabNumber: self.nbTabs()}));

            return this;
        };
        self.load = function () {
            $($selector).tabulous({effect: 'scale'});
            $($selector + ' .tabs').css({'position': 'absolute', 'top': 40});
            $($selector + '-container').addClass('transition');
            $($selector + '-' + self.nbTabs()).removeClass('hidescale make_transist').addClass('hidescale make_transist showscale');
            console.log(self.nbTabs());
            $('.tabs').not($selector + '-' + self.nbTabs()).removeClass('showscale');
        };
        self.get = function () {
            return {nbTabs: self.nbTabs(), tabs: self.tabs()};
        };

    }
});
