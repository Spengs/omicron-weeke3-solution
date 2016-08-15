// jquery app
$(document).ready(function() {

  $("#calcForm").on("submit", function() {
    event.preventDefault();

    var math = {};
    var fields = $(this).serializeArray();
    fields.forEach(function(field) {
      math[field.name] = field.value;
    });

    console.log('given math object: ', math);

    if(math.inputX == "" || math.inputY == "") {
      alert("Hey, give me something to work with, here!");
    } else {
      if(math.operation == "div" && math.inputY == 0) {
        alert("Hey, don't divide by zero, you'll kill us all!");
      } else {
        $.ajax({
          type: 'POST',
          url: '/calculate/' + math.operation,
          data: math,
          success: updateDom
        });
      }
    }
  });

  function updateDom(response) {
    console.log('server says: ', response);
    $("#answer-text").text(response);
  }

});
