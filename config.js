(function() {
angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
      .when("/taskForm",{
        template:"<task-form></task-form>"
      })
      .when("/taskList",{
        template:"<task-list></task-list>"
      });
  });
})();
