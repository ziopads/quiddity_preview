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
    $scope.view = {
      textBlock1h1: 'Concept and Overview',
      // textBlock1p: 'This is the Process page',
      textBlock2h3: 'Potential Sources of Data Inputs',
      textBlock2p: ['Twitter Sentiment Analysis', 'Refugee Movements', 'Maritime Vessel Tracking'],
      textBlock3h3: 'Potential Sources of User Inputs',
      textBlock3p: ['Mouse movements', 'Browser attributes', 'Device Microphone & Camera', 'Kinect'],
    };
  }
  function ProcessController($scope, $http){
    $scope.view = {
      textBlock1h1: 'About the Developer',
      textBlock1p: 'James Haskins is a full-stack web developer.',
      textBlock3h3: 'GitHub Repos'

    };
    $scope.utils = {
      gitData: function(){
        $http.get("https://api.github.com/users/ziopads/repos")
        .then(function(data) {
          $http.get(data.headers('link'))
          .then(function(data){
            console.log(data.headers('link'));
            $scope.view.gitData = data.data;
          })

        });
      }
    }
    $scope.utils.gitData();
  }
  function DesignController($scope){
    $scope.view = {
      textBlock1h1: 'Design Principles',
      // textBlock1p: 'This is the Process page',
      textBlock2h3: 'Sonification and Visualization',
      textBlock2p: 'There are a number of challenges inherent in sonification and visualization projects, the largest of which may be described as \"Signal-to-Noise Ratio\". If too many data points are sonified/visualized, the result is chaos; to few data points result in a static, uninteresting user experience. The goal is to build an platform that balances simplicity and complexity.',
      textBlock3h3: 'Potential Front-end Technologies',
      textBlock3p: ['Web Audio API', 'Canvas', 'p5.js'],
      textBlock4h3: 'Aspects of Sonification',
      textBlock4p: ['Rhythm', 'Bassline', 'Pads', 'Leads']
    };
  }

  angular.module('preview').controller('HomeController', HomeController);
  angular.module('preview').controller('OverviewController', OverviewController);
  angular.module('preview').controller('ProcessController', ProcessController);
  angular.module('preview').controller('DesignController', DesignController);
}());
