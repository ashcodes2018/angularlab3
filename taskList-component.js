(function() {
  var taskList={
    bindings:{
      todoList:"<"
    },
    templateUrl:"taskList.html",
    controller:function(TodoService){
      var $ctrl=this;
      $ctrl.removeTodo=function($index){
        TodoService.setData(d)
      $ctrl.todoList.splice($index,1);
      }
    }
  }
  angular
    .module("app")
    .component("taskList",taskList);
}());



// (function() {
//   var storyComponent={
//     template:
//     `<form ng-submit="$ctrl.seeStory($ctrl.words);">
//           <input type="text" ng-model="$ctrl.words.noun" placeholder="noun" >
//           <input type="text" ng-model="$ctrl.words.verb" placeholder="verb" >
//           <input type="text" ng-model="$ctrl.words.adjective" placeholder="adjective" >
//           <input type="text" ng-model="$ctrl.words.adverb" placeholder="adverb" >
//           <input type="text" ng-model="$ctrl.words.pronoun" placeholder="pronoun" >
//           <button>check your story</button>
//       </form>`,
//     controller:function(StoryService){
//       var vm=this;
//       vm.seeStory=function(words){
//           console.log(words);
//           StoryService.getWords(words);
//       };
//     }
//   };
//   angular
//   .module("StoryModule")
//   .component("storyComponent",storyComponent);
//
// })();
