$(document).ready(function(){
    // $(".addBtn").click(function(){
    //     var value = $('#myInput').val()
    //     $("#myUL").append("<li>"+ value +"</li>")

    //     });
     // Check for to-do items in local storage
     if (localStorage.getItem("toDoList")) {
        $("#myUL").html(localStorage.getItem("toDoList"));
      }
  
      // Add to-do item
      $(".addBtn").click(function() {
        var toAdd = $("input[id=myInput]").val();
        $("#myUL").append("<div class='task'>"+ toAdd +"<span class='del'>Delete</span></div>");
        // $("#myUL").append("<div class='checkbox'><label><input type='checkbox'>" + toAdd + "</label><span style='margin-left:5px;' class='fa fa-trash'> </span></div>");
        localStorage.setItem("toDoList", $("#myUL").html());
        $("id=myInput").val("");
      });
  
      // Mark to-do item as completed
      $("#myUL").on("click", "div[class=task]", function() {
        if($(this).hasClass("task")) {
          $(this).addClass("done");
        }
        localStorage.setItem("toDoList", $("#myUL").html());
      });
  
      // Delete to-do item
      $("#myUL").on("click", "span", function() {
        $(this).parent().remove();
        localStorage.setItem("toDoList", $("#myUL").html());
      });
  });