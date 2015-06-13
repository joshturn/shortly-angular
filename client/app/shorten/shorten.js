angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};

  $scope.addLink = function (req, res){
    $http.post('/api/links')
    .success(function(req, res){
    return (201, req.body)
    })
    .error(function(data, err){
    return (400, err);
    });
  };
});
