$(document).ready(function() {
  $("#hide").click(function(){
      $("#hide").hide();
  });
  $("#show").click(function(){
      $("#hide").show();
  });
  $("#doubleClick").dblclick(function(){
      $("#doubleClick").hide();
  });
});
