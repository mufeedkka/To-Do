$(document).ready(function(){
     if (localStorage.getItem("toDoList")) {
        $("#myUL").html(localStorage.getItem("toDoList"));
      }
  
      $(".addBtn").click(function() {
        var toAdd = $("input[id=myInput]").val();
        $("#myUL").append("<div class='task'>"+ toAdd +"<span class='del'>Delete</span></div>");
        localStorage.setItem("toDoList", $("#myUL").html());
        $("id=myInput").val("");
      });
  
      $("#myUL").on("click", "div[class=task]", function() {
        if($(this).hasClass("task")) {
          $(this).addClass("done");
        }
        localStorage.setItem("toDoList", $("#myUL").html());
      });
  
      $("#myUL").on("click", "span", function() {
        $(this).parent().remove();
        localStorage.setItem("toDoList", $("#myUL").html());
      });
  });