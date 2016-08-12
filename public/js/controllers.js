(function(){
  HomeController.$inject = ['$scope'];
  BioController.$inject = ['$scope'];
  ProcessController.$inject = ['$scope'];
  DesignController.$inject = ['$scope'];

  function HomeController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Home page.'
  }
  function OverviewController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Overview page.'
  }
  function ProcessController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Process page.'
  }
  function ResumeController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Design page.'
  }

  angular.module('preview').controller('HomeController', HomeController);
  angular.module('preview').controller('OverviewController', OverviewController);
  angular.module('preview').controller('ProcessController', ProcessController);
  angular.module('preview').controller('DesignController', DesignController);
}());
