(function(){
  HomeController.$inject = ['$scope'];
  OverviewController.$inject = ['$scope'];
  ProcessController.$inject = ['$scope', '$http'];
  DesignController.$inject = ['$scope'];

  function HomeController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Home page.'
  }
  function OverviewController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Overview page.'
  }
  function ProcessController($scope, $http){
    $scope.view = {};
    $scope.view.message = 'This is the Process page.'
    $scope.utils = {
      gitData: function(){
        $http.get("https://api.github.com/users/ziopads/repos")
        .then(function(data) {
          // return data;
          console.log(data.data);
          $scope.view.gitData = data.data;
        });
      }
    }
    $scope.utils.gitData();
  }
  function DesignController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Design page.'
  }

  angular.module('preview').controller('HomeController', HomeController);
  angular.module('preview').controller('OverviewController', OverviewController);
  angular.module('preview').controller('ProcessController', ProcessController);
  angular.module('preview').controller('DesignController', DesignController);
}());
