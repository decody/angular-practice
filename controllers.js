angular.module('todo').controller('TodoCtrl', function($scope, todoStorage) {
// angular.module('todo').controller('TodoCtrl', ['$scope', function($scope, todoStorage) {

  // service.js 에서 todoStorage 객체 가져옴
  $scope.todos = todoStorage.get();

  $scope.remove = function(todo) {
    console.log(">> remove click");
    todoStorage.remove(todo);

  },

  $scope.add = function(newTodoTitle) {
    console.log(">> todo item: " + newTodoTitle);
    console.dir( todoForm );

    todoStorage.add(newTodoTitle);
    // empty form
    $scope.newTodoTitle = "";
  },

  $scope.update = function() {
    console.log(">> update function call");
    todoStorage.update();
  }
//}]);
});
