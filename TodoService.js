(function() {
  function TodoService(){
    var todoList=["apple","oranges"];
    return {
      //one method to get words and another to set words
      getData:getData,//function
      setData:setData//function
    }
    function getData(){
      return todoList;
    }
    function setData(data){
      todoList.push(data);
      console.log(todoList);
    }
  }
  angular
    .module("app")
    .factory("TodoService",TodoService);
})();
