(function(){
  angular.module('preview', ['ngRoute'])

  function routes($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'public/partials/home.html',
        controller: 'HomeController'
      })
      .when('/overview', {
        templateUrl: 'public/partials/overview.html',
        controller: 'OverviewController'
      })
      .when('/process', {
        templateUrl: 'public/partials/process.html',
        controller: 'ProcessController'
      })
      .when('/design', {
        templateUrl: 'public/partials/design.html',
        controller: 'DesignController'
      })

      .otherwise({redirectTo: '/'})
  };

  angular.module('preview').config(routes);

}());
