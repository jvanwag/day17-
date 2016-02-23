angular.module('timeApp').directive('showTime', function(){
  return {
    restrict: 'E',
    template: "<div>Current time is {{time | date: 'medium'}}</div><div>GMT time is {{gmtTime | date: 'medium'}}</div",
    scope: {
      format: '=',
      update: '&'
    },

    link: function(scope, element, attrs){
      var currentTime = new Date();


      element.css({
        fontWeight: "bold",
        color: "pink"
      })

      element.on('mousedown', function(){
        // scope.time = new Date();
        // scope.$apply();
        //   scope.gmtTime = new Date(scope.time.toGMTString());
        scope.update();
        scope.$apply();
      })
      scope.time = currentTime;
      scope.gmtTime = new Date(currentTime.toGMTString());
    },
    controller: function($scope, myService, $timeout) {
      myService.validateEmail($scope.email)
      .then(function(){

      })
    }
  }
})
