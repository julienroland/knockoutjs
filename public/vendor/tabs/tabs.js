define(['jquery', 'knockout', 'helpers', 'tabs'], function ($, ko, Helpers) {
    return function ($selector, oParams) {
        /* *
         * oParams
         * @required tabNumber
         * */
        //init
        $($selector).tabulous({effect: 'scale'});
        var self = this;

        self.tabs = ko.observableArray();
        self.nbTabs = ko.observable(0);
        self.add = function (oParams) {
            self.nbTabs(self.nbTabs() + 1);
            self.tabs.push(new Helpers().merge(oParams, {tabNumber: self.nbTabs()}));
            return this;
        };
        self.change = function (data) {
            $($selector + ' .tabs').not($selector + '-' + data.tabNumber).removeClass('showscale');
            $($selector + '-' + data.tabNumber).toggleClass('showscale');
        };
        self.load = function () {
            self.setActive(self.nbTabs());
            $($selector).tabulous({effect: 'scale'});
            $($selector + ' .tabs').css({'position': 'absolute'});
            $($selector + '-container').addClass('transition');
            $($selector + '-' + self.nbTabs()).removeClass('hidescale make_transist').addClass('hidescale make_transist showscale');
            $('.tabs').not($selector + '-' + self.nbTabs()).removeClass('showscale');
        };
        self.setActive = function (nNbTabs) {
            console.log(nNbTabs);
            var $tabLink = $($selector + ' a[href="' + $selector + '-' + nNbTabs+'"]');

            $($selector + ' a').removeClass('tabulous_active');
            $tabLink.focus();
            $tabLink.addClass('tabulous_active');
        }
        self.get = function () {
            return {nbTabs: self.nbTabs(), tabs: self.tabs()};
        };

    }
});
