define(["knockout", "text!./index.html", "tabs", "tweenlite"], function (ko, indexTemplate, Tabs) {
    function indexViewModel(route) {
        var self = this;
        ko.components.clearCachedDefinition('article-tab')
        self.saveEdit = ko.observable(true);
        self.tabs = ko.observableArray();
        self.nbTabs = ko.observable(0);
        self.tabActive = ko.observable(0);
        self.titleTypeAction = ko.observable();
        self.message = ko.observable('Welcome to Knockoutjs!');
        self.tabsClass = new Tabs('#tabs', {effect: 'scale'})
        self.changeTab = function (data, event) {
            /* $('#tabs .tabs').css({'position': 'absolute', 'top': 40});
             $('#tabs-container').addClass('transition');*/
            $('.tabs').not('#tabs-' + data.tabNumber).removeClass('hidescale make_transist').addClass('hidescale make_transist').removeClass('showscale');
            console.log($('#tabs-' + data.tabNumber).removeClass('hidescale make_transist').addClass('hidescale make_transist').toggleClass('showscale'));
        }

        self.createNewArticle = function () {
            self.titleTypeAction('Créer un nouvel article')
            self.saveEdit(true);
            //console.log(TweenLite.to('#saveEdit', 2, {backgroundColor: "#ff0000"}));
            self.tabsClass.add({
                title: self.titleTypeAction()
            });
            self.tabs(self.tabsClass.tabs());
            self.nbTabs(self.tabsClass.nbTabs());
            self.tabsClass.load();
        }

    }

    return {viewModel: indexViewModel, template: indexTemplate};

})
;
