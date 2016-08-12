(function(){
  angular.module('preview', ['ngRoute'])

  function routes($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/overview', {
        templateUrl: 'partials/overview.html',
        controller: 'OverviewController'
      })
      .when('/process', {
        templateUrl: 'partials/process.html',
        controller: 'ProcessController'
      })
      .when('/design', {
        templateUrl: 'partials/design.html',
        controller: 'DesignController'
      })

      .otherwise({redirectTo: '/'})
  };

  angular.module('preview').config(routes);

}());
