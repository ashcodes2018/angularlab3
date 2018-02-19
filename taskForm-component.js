(function() {
  var taskForm={
  bindings:{
  },
  templateUrl:"taskForm.html",
  controller:function(TodoService){
    var $ctrl=this;
    $ctrl.list=TodoService.setData(data);
    console.log($ctrl.list);
  }
};
  //      $ctrl.todoList=["apple","peaches"];
  //      $ctrl.addTodo=function(item){
  //      $ctrl.todoList.push(item)
  //      $ctrl.item="" ;
  //
  //   }
  // }
  // };

  angular
    .module("app")
    .component("taskForm",taskForm);

}());






// (function() {
//   var taskFormComponent={
//     template:`<p>{{$ctrl.wordsToDisplay.noun}}</p>
//     <p>{{$ctrl.wordsToDisplay.verb  }}</p>
//     <p>{{ $ctrl.wordsToDisplay.adjective }}</p>
//     <p>{{$ctrl.wordsToDisplay.adverb  }}</p>
//     <p>{{$ctrl.wordsToDisplay.pronoun  }}</p>
//     `,
//     controller:function(StoryService){
//       var vm = this;
//       vm.wordsToDisplay=StoryService.sendWords();//wordsToDisplay will take the value coming from sendWords function
//       console.log(vm.wordsToDisplay);
//     }
//   };
//   angular
//       .module("StoryModule")
//       .component("displayComponent",displayComponent);
// })();
