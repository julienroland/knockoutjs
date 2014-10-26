define(["knockout", "text!./index.html", "tab", "tweenlite"], function (ko, indexTemplate, tabulous) {
    function indexViewModel(route) {
        var self = this;
        ko.components.clearCachedDefinition('article-tab')
        self.saveEdit = ko.observable(true);
        self.tabs = ko.observableArray();
        self.nbTabs = ko.observable(0);
        self.titleTypeAction = ko.observable();
        self.message = ko.observable('Welcome to Knockoutjs!');
        self.createNewArticle = function () {
            console.log('create');
            self.titleTypeAction('Créer un nouvel article')
            ko.components.get('article-tab', function (template) {
                console.log(template[0]);
                self.nbTabs(self.nbTabs() + 1);
                self.tabs.push({
                    tabNumber: self.nbTabs(),
                    template: template.template[0],
                    title: self.titleTypeAction()
                });
            });
            console.log(self.tabs());
            self.saveEdit(true);
            $('#tabs').tabulous();
            console.log(TweenLite.to('#saveEdit', 2, {backgroundColor: "#ff0000"}));

        }
    }


    return {viewModel: indexViewModel, template: indexTemplate};

});
