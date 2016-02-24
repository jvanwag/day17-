angular.module('directivePractice')
.directive('lessonHider', function(){
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson:'=',
      dayAlert: '&',
      lessons: '='

    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule()
    },
    link: function(scope, element, attributes){
      scope.toggleLesson = function() {
        if(scope.toggle) {
          element.css('text-decoration', 'line-through')
        } else {
          element.css('text-decoration', 'none')
        }
      }

      scope.deleteLesson = function() {
        var index = scope.lessons.indexOf(scope.lesson)
        scope.lessons.splice(index, 1);

      }

      scope.getSchedule.then(function(response){
        scope.schedule = response.data;
        console.log(response);

        scope.schedule.forEach(function (scheduleDay){
          if (scheduleDay.lesson === scope.lesson) {
            scope.lessonDay = scheduleDay.weekday;
            element.css('text-decoration', 'line-through');
            scope.toggle = true;
            return;
          }
        })
      });

    }
  }
});
