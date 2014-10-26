define(["knockout", "text!./index.html", "tabs", "response", "helpers", "tweenlite"], function (ko, indexTemplate, Tabs, Response, Helpers) {
    function indexViewModel(route) {
        var self = this;
        self.posts = ko.observable();
        self.post = ko.observable();
        self.saveEdit = ko.observable(true);
        self.tabs = ko.observableArray();
        self.hasResponse = ko.observable(false);
        self.response = ko.observable();
        self.isError = ko.observable();
        self.nbTabs = ko.observable(0);
        self.titleTypeAction = ko.observable();
        self.tabsClass = new Tabs('#tabs', {effect: 'scale'});

        self.getArticle = function () {
            $.get('/post', function (oData) {
                self.posts(oData);
            });
        }
        self.getArticle();

        self.editArticle = function (oData) {
            self.tab(oData);
            self.post(oData);
        }
        self.storeArticle = function () {
            $.post('/post', $(arguments).serialize(), function (oData) {
                console.log(oData);
                var response = new Response(oData);

                response.got(function (bGotIt) {
                    self.hasResponse(bGotIt);
                }).errors(function (oErrors) {
                    self.isError(true);
                    self.response(oErrors);
                }).success(function (sSuccess) {
                    self.isError(false);
                    self.response(sSuccess);
                });

            }).fail(function (oData) {
                console.log(oData);
                self.hasErrors(true);
                self.errors(oData);
            });
        };
        self.updateArticle = function () {
            $.ajax({
                url: '/post/' + self.post().id,
                method: "PUT",
                data: $(arguments).serialize(),
                success: function (oData) {
                    console.log(oData);
                    var response = new Response(oData);

                    response.got(function (bGotIt) {
                        self.hasResponse(bGotIt);
                    }).errors(function (oErrors) {
                        self.isError(true);
                        self.response(oErrors);
                    }).success(function (sSuccess) {
                        self.isError(false);
                        self.response(sSuccess);
                    });
                }
            });
        };
        self.createNewArticle = function () {
            self.post(undefined);
            self.titleTypeAction('Créer un nouvel article');
            self.tab();
        }
        self.tab = function (oData) {

            self.saveEdit(true);
            //console.log(TweenLite.to('#saveEdit', 2, {backgroundColor: "#ff0000"}));
            if (typeof oData === "undefined") {
                oData = {title: self.titleTypeAction()};
            } else {
                oData = new Helpers().merge({title: self.titleTypeAction()}, oData);
            }
            self.tabsClass.add(oData);
            self.tabs(self.tabsClass.tabs());
            self.nbTabs(self.tabsClass.nbTabs());
            self.tabsClass.load();
        }
    }

    return {viewModel: indexViewModel, template: indexTemplate};

});
