;(function(){
    var app = angular.module('app', ['ngRoute'])

    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'view/index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    window.app = app;
})();

