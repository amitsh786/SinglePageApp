if (typeof window.location.origin === "undefined"){
    window.location.origin = window.location.protocol + "//" + window.location.host;
}
var utils = {
    renderPageTemplate: function(templateId, data) {
        var _data = data || {};
        var templateScript = $(templateId).html();
        var template = Handlebars.compile(templateScript);

        $("#page-container").empty();
        $("#page-container").append(template(_data));
    },
    pageNotFoundError: function() {

        var data = {
            errorMessage: "404 - Page Not Found"
        };
        this.renderPageTemplate("#error-page-template", data);
    },
    fetch: function(url, data) {
        var _data = data || {};
        return $.ajax({
            context: this,
            url: window.location.origin + "/" + url,
            data: _data,
            method: "GET",
            dataType: "JSON"
        });
    }
};
var router = {
    routes: {},
    init: function() {
        console.log('router was created...');
        this.bindEvents();
        $(window).trigger("hashchange");
    },
    bindEvents: function() {
        $(window).on("hashchange", this.render.bind(this));
    },
    render: function() {
        var keyName = window.location.hash.split("/")[0];
        var url = window.location.hash;
        $("#page-container")
            .find(".active")
                .hide()
                    .removeClass("active");
        if (this.routes[keyName]) {
            this.routes[keyName](url);

        } else {
            utils.pageNotFoundError();
        }
    }
};
var spaRoutes = {


    "#home": function(url) {
        console.log('home was called...');
        utils.renderPageTemplate("#home-page-template");
    },
    "#SignUp": function(url) {
        console.log('about was called...');
        utils.renderPageTemplate("#about-page-template");
    },
    "#Login": function(url) {
        console.log('contact was called...');
        utils.renderPageTemplate("#contact-page-template");
    }
};
var spaRouter = $.extend({}, router, {
    routes: spaRoutes
});

spaRouter.init();
// window.location.hash = "#home";
