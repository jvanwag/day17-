angular.module('timeApp').controller('mainCtrl', function($scope){

$scope.name='Jon';
$scope.ctrlformat= 'medium';

$scope.updateFormat = function() {
  if($scope.ctrlformat === "medium") {
    $scope.ctrlformat = "short"
  }
  else {
    $scope.ctrlformat = 'medium'
  }
}
})
