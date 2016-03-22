;(function(){
    var app = angular.module('app', ['ngRoute'])

    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'html/view/index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    window.app = app;
})();

