angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};// Your code here

  $scope.getLinks = function (){
    Links.getLinks().then( function(resp){
      $scope.data.links = resp.data;
    });
  };

  $scope.getLinks();
});
