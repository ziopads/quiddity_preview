(function(){
  HomeController.$inject = ['$scope'];
  BioController.$inject = ['$scope'];
  ProjectsController.$inject = ['$scope'];
  ResumeController.$inject = ['$scope'];

  function HomeController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Home page.'
  }
  function BioController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Bio page.'
  }
  function ProjectsController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Projects page.'
  }
  function ResumeController($scope){
    $scope.view = {};
    $scope.view.message = 'This is the Resume page.'
  }

  angular.module('portfolio').controller('HomeController', HomeController);
  angular.module('portfolio').controller('BioController', BioController);
  angular.module('portfolio').controller('ProjectsController', ProjectsController);
  angular.module('portfolio').controller('ResumeController', ResumeController);
}());
